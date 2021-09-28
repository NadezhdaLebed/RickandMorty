const isProd = process.env.NODE_ENV === 'production';
const isDisableReduxLogger = process.env.DISABLE_REDUX_LOGGER;

export default {
    isProd,
    isDisableReduxLogger
}