import TransportTypes from '../../app/transports';

describe('TransportTypes', function () {
    // The class should initialise
    it('should create a new instance', function () {
        let transportTypeBus = new TransportTypes('BUS');
        console.log(transportTypeBus);
        expect(transportTypeBus instanceof TransportTypes).toBeTruthy();
    });
    // Returns a transport type
    it('should return a transport type', function () {
        let transportTypeTube = new TransportTypes('TUBE');

        expect(transportTypeTube.transport.type).toBe('TUBE');
    });
});