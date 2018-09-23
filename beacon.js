const eddystoneBeacon = require('eddystone-beacon');

// Beacon Settings
const options = {
    name: 'HackSoc Nottingham',
    txPowerLevel: 20,
    tlmCount: 1,
    tlmPeriod: 100,
};

// Beacon URL
const url = 'https://hacknotts.com';

// UID Details
const namespaceId = '2e139f00da2cb2ed4180';
const instanceId = '000000000001';


eddystoneBeacon.advertiseUrl(url, options);
eddystoneBeacon.advertiseUid(namespaceId, instanceId, options);
