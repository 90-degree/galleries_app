import moment from 'moment';

export const formatDateString = (value) => {
    if (!value) return ''
    return moment(value).format('Do MMMM YYYY, h:mm:ss a')
}

export const diffForHumans = (value) => {
    if (!value) return ''
    return moment(value).fromNow()
}