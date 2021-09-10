import React from 'react';

// const result = resource.read();

const createResource =(pending)=> {
    let error, res;
    pending.then(r => (res = r)).catch(e => (error = e));
    return {
        read() {
            if (error) throw error;
            if (res) return res;
            throw pending;
        }
    };
}

const threeSecondsToGnar = new Promise(resolves => 
    setTimeout(()=> resolves({gnar: "gnarly!"}), 3000)
    );
    
const resource = createResource(threeSecondsToGnar);
const Gnar =()=> {
    const result = resource.read();
    return <h1>Gnar: {result.gnar}</h1>
}



export default Gnar 