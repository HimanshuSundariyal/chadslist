import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';
import './App.css'

const render = () => {
  import(`./assets/css/sass/main.scss`).then(() => {
    require('./AppRenderer');
  });
};
render();
