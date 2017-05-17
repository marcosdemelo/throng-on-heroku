const throng = require('throng');

throng((id) => {
    console.log(`Started worker ${id}`);
});
