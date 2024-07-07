import authRouter from './auth'
import insertRouter from './insert'
import categoryRouter from './category'
import postRouter from './post'
import priceRouter from './price'
import acreageRouter from './acreage'
import provinceRouter from './province'
import posting  from '../controller/posting'

const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/insert', insertRouter)
    app.use('/api/v1/category', categoryRouter)
    app.use('/api/v1/post', postRouter)
    app.use('/api/v1/price', priceRouter)
    app.use('/api/v1/acreage', acreageRouter)
    app.use('/api/v1/province', provinceRouter)
    app.post('/api/v1/posting', posting)

    return(
        app.use('/', (req, res) => {
            res.send('Ơn giời...code chạy đây rồi -)))')
        })
    )
}

export default initRouter