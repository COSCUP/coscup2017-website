import { createAction } from 'redux-actions'
import Api from 'js/api'

export default {
    get: createAction('GET_STAFF', Api.Staff.get)
}
