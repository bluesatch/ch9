import React from 'react';

const loadStatus = (function() {
    let error, promise, response;

    return function() {
        if (error) throw error;
        if (response) return response;
        throw promise;
    };
})()

// const safe =(fn)=> {
//     try {
//         fn();
//     } catch (error) {
//         if (error instanceof Promise) {
//             error.then(()=> safe(fn))
//         } else {
//             throw error;
//         }
//     }
// }

// safe(loadStatus);
const Status =()=> {
    const status = loadStatus();
    return <h1>status: {status}</h1>
}

export default Status