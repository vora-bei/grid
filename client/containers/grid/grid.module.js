module.exports = {
    path: 'grid',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/grid.jsx'));
        });
    }
};
