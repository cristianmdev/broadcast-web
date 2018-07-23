class Actions{

    /**
     * @return {Promise} - Todos los dispositivos
     */
    static getDevices(){

      // Enumeramos los dispositivos
      return navigator.mediaDevices.enumerateDevices();

    }

    /**
     * 
     * @param {MediaDeviceInfo} devices - https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo
     */
    static filterMics(devices){
        return devices.filter((driver) => {
            // Filter Audio Mic
            if(driver.kind == "audioinput" && driver.deviceId != 'communications' && driver.deviceId != 'default'){
                return driver;
            }
        });
    }

    /**
     * @desc 
     * @return {Promise} 
     */
    listen(){
        return new Promise((resolve,reject) => {

            // Buscamos los permisos del microfono
            Actions.getDevices()
                   .then(this.filterMics).then(resolve)
                   .catch(reject);

        });
    }

}

export default Actions;