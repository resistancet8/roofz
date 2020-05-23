import { observable } from "mobx"

class AuthStore {
  @observable isLoggedIn = false
  @observable loading = false
  @observable collapsed = false
  @observable userInfo = {}

  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (this.userInfo) {
      this.isLoggedIn = true
    }
  }

  setLogin = (status) => {
    this.isLoggedIn = status
    localStorage.removeItem('userInfo')
  }

  setUserInfo = (userInfo) => {
    this.userInfo = userInfo
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  toggle = () => {
    this.collapsed = !this.collapsed
  }
}

export default AuthStore