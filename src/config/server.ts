import { networkInterfaces } from 'os';

export const logServerInfo = () => {
    const interfaces = networkInterfaces();
    const addresses = [];
    
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name] || []) {
            if (!net.internal && net.family === 'IPv4') {
                addresses.push(net.address);
            }
        }
    }

    console.log('\n🚀 Server Information:');
    console.log(`🔹 Local: http://localhost:3000`);
    addresses.forEach(addr => {
        console.log(`🔹 Network: http://${addr}:3000`);
    });
    console.log('\n');
};
