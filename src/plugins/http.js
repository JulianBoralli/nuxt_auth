export default function ({ $http }) {
  $http.onRequest((config) => {
    console.log(`jammin' to ${config.url}`)
  })
}
