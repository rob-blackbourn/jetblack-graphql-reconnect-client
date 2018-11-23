function retryFetch (url, options, delay = 1000, maxRetries = 0, retryOn = [503]) {
  return new Promise((resolve, reject) => {
    const fetchProxy = retryCount => {
      fetch(url, options)
        .then((response) => {
          if (response.status < 400) {
            resolve(response)
          } else if (retryOn.includes(response.status) && (maxRetries === 0 || retryCount < maxRetries)) {
            retry(retryCount)
          } else {
            resolve(response)
          }
        })
        .catch(error => {
          if (maxRetries > 0 && retryCount < maxRetries) {
            retry(retryCount)
          } else {
            reject(error)
          }
        })
    }

    function retry (retryCount) {
      setTimeout(() => fetchProxy(++retryCount), delay)
    }

    fetchProxy(0)
  })
}

export const retryFetchOptions = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' }
}

export default function graphQLRetryFetch (url, query, variables = {}, operationName = null, init = retryFetchOptions) {
  return retryFetch(
    url,
    {
      ...init,
      body: JSON.stringify({
        query,
        variables,
        operationName
      })
    })
}
