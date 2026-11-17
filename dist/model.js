import {ModelViewerElement} from './assets/model-viewer.min.js';
ModelViewerElement.meshoptDecoderLocation=new URL('./assets/meshopt-decoder.js',import.meta.url).href;
document.querySelector('#mascot').src='assets/chung.glb';
