export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('Auth Middleware', store.getters['authenticated/isLoggedIn'])
  if (!store.getters['authentication/isLoggedIn']) {
    return redirect('/')
  }
}