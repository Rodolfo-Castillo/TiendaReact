//ARANCAR SERVIDOR EXPRESS
import app from './app'

const main = ()=>{
    app.listen(app.get("port"));
    console.log('SERVER ON PORT '+app.get("port"));
};

main();