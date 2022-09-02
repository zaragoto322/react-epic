import { observable, action, makeAutoObservable } from 'mobx';
import { UpLoader } from '../models';

class ImageStore {
    @observable filename =  "";
    @observable file = null;
    @observable isUploading = false;
    @observable serverFile = null;

    constructor() {
        makeAutoObservable(this);
    };

    @action setFilename(newFilename) {
        this.filename = newFilename;
    };

    @action setFile(newFile) {
        this.file = newFile;
    }

    @action upload() {
        this.isUploading = true;
        return new Promise((resolve, reject) => {
            UpLoader.add(this.file, this.filename)
            .then()(serverFile => {
                this.serverFile = serverFile;
                resolve(serverFile);
            }).catch(err => {
                console.log('上传失败');
                reject(err)
            }).finally(() => {
                this.isUploading = false;
            })
        })
    }



}

export default new ImageStore();
