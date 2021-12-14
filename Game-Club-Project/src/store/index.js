import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'

Vue.use(Vuex)
Vue.use(VueClipboard)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token');
const currentUser = JSON.parse(localStorage.getItem('user'));
const currentMenu = JSON.parse(localStorage.getItem('menu'));
const currentInv = JSON.parse(localStorage.getItem('tempInv'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    activeCookout: {},
    cookoutMenu: currentMenu || [],
    myCookouts:[],
    attendingCookouts:[],
    pendingInvites: [],
    tempInvite: currentInv || {},
    allCookouts: [],
    userList: [],
    cart: [],
    attendeeList: []
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_ACTIVE_COOKOUT(state, cookout) {
      state.activeCookout = cookout;
    },
    SET_MY_COOKOUTS(state, myCookouts) {
      state.myCookouts = myCookouts;
    },
    SET_ATTENDING_COOKOUTS(state, cookouts) {
      state.attendingCookouts = cookouts;
    },
    SET_USER_LIST(state, userList) {
      state.userList = userList;
    },
    SET_PENDING_INVITES(state, invites) {
      state.pendingInvites = invites;
      localStorage.removeItem('tempInv');
    },
    SET_ALL_COOKOUTS(state, cookoutList) {
      state.allCookouts = cookoutList;
    },
    ADD_ATTENDING_COOKOUT(state, cookout) {
      state.attendingCookouts.push(cookout);
    },
    SET_COOKOUT_MENU(state, menu) {
      state.cookoutMenu = menu;
      localStorage.setItem('menu', JSON.stringify(menu));
    },
    SET_TEMP_INVITE(state, invite) {
      state.tempInvite = invite;
      localStorage.setItem('tempInv', JSON.stringify(invite));
    },
    ADD_ITEM_TO_CART(state, items) {
      state.cart = items;
    },
    REMOVE_ITEM_FROM_CART(state, filteredCart) {
      state.cart = filteredCart;
    },
    SET_ATTENDEE_LIST(state, attendeeList) {
      state.attendeeList = attendeeList;
    }
  }
})
