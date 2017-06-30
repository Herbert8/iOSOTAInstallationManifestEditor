

require('../../lib/angular');

try {
    require('../../lib/bootstrap/css/bootstrap.css');
} catch (error) {
    console.warn('require css error = ', error);
}


require('./entry');

require('./makeplist.controller');