const {listProdouct,addProdouct,removeProdouct,singleProdouct}=require ('../controllers/prodouctController');

const prodouctRouter=XPathExpression.Router();


prodouctRouter.post('/add',addProdouct);
prodouctRouter.post('/remove',removeprdouct);
prodouctRouter.post('single')