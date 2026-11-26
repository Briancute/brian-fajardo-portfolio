import{a as e,c as t,d as n,f as r,h as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./site-BbXVgEu6.js";var h=1e3,g=1001,_=1002,v=1003,y=1004,b=1005,x=1006,S=1007,C=1008,w=1009,T=1010,E=1011,D=1012,O=1013,k=1014,A=1015,j=1016,M=1017,N=1018,ee=1020,P=35902,F=35899,I=1021,te=1022,ne=1023,re=1026,L=1027,ie=1028,ae=1029,oe=1030,se=1031,ce=1033,le=33776,ue=33777,de=33778,fe=33779,pe=35840,me=35841,he=35842,R=35843,ge=36196,_e=37492,ve=37496,z=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,B=37815,ke=37816,Ae=37817,je=37818,V=37819,Me=37820,H=37821,Ne=36492,Pe=36494,Fe=36495,Ie=36283,Le=36284,Re=36285,ze=36286,Be=2300,Ve=2301,He=2302,Ue=2303,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=2e3;function tt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function it(){let e=rt(`canvas`);return e.style.display=`block`,e}var at={};function ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function st(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ct(...e){let t=e.join(` `);t in at||(at[t]=!0,U(...e))}function lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ut={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},dt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ft=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pt=1234567,mt=Math.PI/180,ht=180/Math.PI;function gt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ft[e&255]+ft[e>>8&255]+ft[e>>16&255]+ft[e>>24&255]+`-`+ft[t&255]+ft[t>>8&255]+`-`+ft[t>>16&15|64]+ft[t>>24&255]+`-`+ft[n&63|128]+ft[n>>8&255]+`-`+ft[n>>16&255]+ft[n>>24&255]+ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]).toLowerCase()}function _t(e,t,n){return Math.max(t,Math.min(n,e))}function vt(e,t){return(e%t+t)%t}function yt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function bt(e,t,n){return e===t?0:(n-e)/(t-e)}function xt(e,t,n){return(1-n)*e+n*t}function St(e,t,n,r){return xt(e,t,1-Math.exp(-n*r))}function Ct(e,t=1){return t-Math.abs(vt(e,t*2)-t)}function wt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Et(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Dt(e,t){return e+Math.random()*(t-e)}function Ot(e){return e*(.5-Math.random())}function kt(e){e!==void 0&&(pt=e);let t=pt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function At(e){return e*mt}function jt(e){return e*ht}function Mt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Nt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Pt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ft(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var G={DEG2RAD:mt,RAD2DEG:ht,generateUUID:gt,clamp:_t,euclideanModulo:vt,mapLinear:yt,inverseLerp:bt,lerp:xt,damp:St,pingpong:Ct,smoothstep:wt,smootherstep:Tt,randInt:Et,randFloat:Dt,randFloatSpread:Ot,seededRandom:kt,degToRad:At,radToDeg:jt,isPowerOfTwo:Mt,ceilPowerOfTwo:Nt,floorPowerOfTwo:Pt,setQuaternionFromProperEuler:Ft,normalize:Lt,denormalize:It},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zt=new q,Bt=new Rt,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vt=new J,Ht=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var Gt=Wt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=rt(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=gt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new q,tn=class e extends dt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=g,i=g,a=x,o=C,s=ne,c=w,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=gt(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case h:e.x-=Math.floor(e.x);break;case g:e.x=e.x<0?0:1;break;case _:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case h:e.y-=Math.floor(e.y);break;case g:e.y=e.y<0?0:1;break;case _:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1;var nn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rn=class extends dt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:x,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];let r=new tn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:x,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=v,this.minFilter=v,this.wrapR=g,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=v,this.minFilter=v,this.wrapR=g,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},cn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ln.setFromMatrixColumn(e,0).length(),i=1/ln.setFromMatrixColumn(e,1).length(),a=1/ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dn,e,fn)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pn.crossVectors(n,hn),pn.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pn.crossVectors(n,hn)),pn.normalize(),mn.crossVectors(hn,pn),r[0]=pn.x,r[4]=mn.x,r[8]=hn.x,r[1]=pn.y,r[5]=mn.y,r[9]=hn.y,r[2]=pn.z,r[6]=mn.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ln.set(r[0],r[1],r[2]).length(),o=ln.set(r[4],r[5],r[6]).length(),s=ln.set(r[8],r[9],r[10]).length();i<0&&(a=-a),un.copy(this);let c=1/a,l=1/o,u=1/s;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ln=new q,un=new cn,dn=new q(0,0,0),fn=new q(1,1,1),pn=new q,mn=new q,hn=new q,gn=new cn,_n=new Rt,vn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _n.setFromEuler(this),this.setFromQuaternion(_n,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER=`XYZ`;var yn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},bn=0,xn=new q,Sn=new Rt,Cn=new cn,wn=new q,Tn=new q,En=new q,Dn=new Rt,On=new q(1,0,0),kn=new q(0,1,0),An=new q(0,0,1),jn={type:`added`},Mn={type:`removed`},Nn={type:`childadded`,child:null},Pn={type:`childremoved`,child:null},Fn=class e extends dt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=gt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new vn,r=new Rt,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cn},normalMatrix:{value:new J}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(On,e)}rotateY(e){return this.rotateOnAxis(kn,e)}rotateZ(e){return this.rotateOnAxis(An,e)}translateOnAxis(e,t){return xn.copy(e).applyQuaternion(this.quaternion),this.position.add(xn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(On,e)}translateY(e){return this.translateOnAxis(kn,e)}translateZ(e){return this.translateOnAxis(An,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wn.copy(e):wn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Tn,wn,this.up):Cn.lookAt(wn,Tn,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Sn.setFromRotationMatrix(Cn),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,En),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Fn.DEFAULT_UP=new q(0,1,0),Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ln={type:`move`},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=vt(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Hn(i,r,e+1/3),this.g=Hn(i,r,e),this.b=Hn(i,r,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=zn[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Gt.workingToColorSpace(Un.copy(this),e),Math.round(_t(Un.r*255,0,255))*65536+Math.round(_t(Un.g*255,0,255))*256+Math.round(_t(Un.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Un.copy(this),t);let n=Un.r,r=Un.g,i=Un.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Je){Gt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,r=Un.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Vn);let n=xt(Bn.h,Vn.h,t),r=xt(Bn.s,Vn.s,t),i=xt(Bn.l,Vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Y;Y.NAMES=zn;var Wn=class extends Fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new q,Kn=new q,qn=new q,Jn=new q,Yn=new q,Xn=new q,Zn=new q,Qn=new q,$n=new q,er=new q,tr=new nn,nr=new nn,rr=new nn,ir=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gn.subVectors(e,t),r.cross(Gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gn.subVectors(r,t),Kn.subVectors(n,t),qn.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Kn),s=Gn.dot(qn),c=Kn.dot(Kn),l=Kn.dot(qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)!==null&&Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Jn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Jn.x),s.addScaledVector(a,Jn.y),s.addScaledVector(o,Jn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return tr.setScalar(0),nr.setScalar(0),rr.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tr,i.x),a.addScaledVector(nr,i.y),a.addScaledVector(rr,i.z),a}static isFrontFacing(e,t,n,r){return Gn.subVectors(n,t),Kn.subVectors(e,t),Gn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Gn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yn.subVectors(r,n),Xn.subVectors(i,n),Qn.subVectors(e,n);let s=Yn.dot(Qn),c=Xn.dot(Qn);if(s<=0&&c<=0)return t.copy(n);$n.subVectors(e,r);let l=Yn.dot($n),u=Xn.dot($n);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Yn,a);er.subVectors(e,i);let f=Yn.dot(er),p=Xn.dot(er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ar=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,sr):sr.fromBufferAttribute(r,t),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),gr.subVectors(this.max,hr),lr.subVectors(e.a,hr),ur.subVectors(e.b,hr),dr.subVectors(e.c,hr),fr.subVectors(ur,lr),pr.subVectors(dr,ur),mr.subVectors(lr,dr);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-mr.z,mr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,mr.z,0,-mr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-mr.y,mr.x,0];return!yr(t,lr,ur,dr,gr)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,lr,ur,dr,gr))?!1:(_r.crossVectors(fr,pr),t=[_r.x,_r.y,_r.z],yr(t,lr,ur,dr,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new q,new q,new q,new q,new q,new q,new q,new q],sr=new q,cr=new ar,lr=new q,ur=new q,dr=new q,fr=new q,pr=new q,mr=new q,hr=new q,gr=new q,_r=new q,vr=new q;function yr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vr.fromArray(e,a);let o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),s=t.dot(vr),c=n.dot(vr),l=r.dot(vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var br=new q,xr=new K,Sr=0,Cr=class extends dt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=A,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=It(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=It(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=It(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=It(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=It(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new ar,Or=new q,kr=new q,Ar=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new cn,Nr=new Fn,Pr=new q,Fr=new ar,Ir=new ar,Lr=new q,Rr=class e extends dt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=gt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(tt(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=new q,Br=new q,Vr=new J,Hr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zr.subVectors(n,t).cross(Br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vr.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ur=0,Wr=class extends dt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=gt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Gr=new q,Kr=new q,qr=new q,Jr=new q,Yr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kr.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Kr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Jr.dot(this.direction),s=-Jr.dot(qr),c=Jr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Kr).addScaledVector(qr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Gr.subVectors(e.center,this.origin);let n=Gr.dot(this.direction),r=Gr.dot(Gr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,F=1/w,I=T-ee*D,te=E-P*D,ne=O-ee*A,re=k-P*A,L=j-ee*N,ie=M-P*N,ae=L*re-ie*ne,oe=I*ie-te*L,se=ne*te-re*I;if(r){if(ae<0||oe<0||se<0)return null}else if((ae<0||oe<0||se<0)&&(ae>0||oe>0||se>0))return null;let ce=ae+oe+se;if(ce===0)return null;let le=F*(ae*D+oe*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xr=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zr=new cn,Qr=new Yr,$r=new Ar,ei=new q,ti=new q,ni=new q,ri=new q,ii=new q,ai=new q,oi=new q,si=new q,ci=class extends Fn{constructor(e=new Rr,t=new Xr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),!($r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2))&&(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ui(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ui(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ui(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ui(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function li(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function ui(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=li(e,t,n,r,ti,ni,ri,oi);if(u){let e=new q;ir.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=ir.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=ir.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=ir.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};ir.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var di=class extends tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=v,l=v,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=new Ar,pi=new K(.5,.5),mi=new q,hi=class{constructor(e=new Hr,t=new Hr,n=new Hr,r=new Hr,i=new Hr,a=new Hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=et,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476+pi.distanceTo(e.center),fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gi=class extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_i=new cn,vi=new Yr,yi=new Ar,bi=new q,xi=class extends Fn{constructor(e=new Rr,t=new gi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(r),yi.radius+=i,e.ray.intersectsSphere(yi)===!1)return;_i.copy(r).invert(),vi.copy(e.ray).applyMatrix4(_i);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);bi.fromBufferAttribute(l,n),Si(bi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)bi.fromBufferAttribute(l,a),Si(bi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Si(e,t,n,r,i,a,o){let s=vi.distanceSqToPoint(e);if(s<n){let n=new q;vi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ci=class extends tn{constructor(e,t,n,r,i=x,a=x,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let l=this;function u(){l.needsUpdate=!0,l._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}`requestVideoFrameCallback`in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;!(`requestVideoFrameCallback`in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},wi=class extends tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ti=class extends tn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ei=class extends tn{constructor(e,t,n=k,r,i,a,o=v,s=v,c,l=re,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Di=class extends Ei{constructor(e,t=k,n=301,r,i,a=v,o=v,s,c=re){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oi=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ki=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ai=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function ji(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ni(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ni(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Mi(e){let t={};for(let n=0;n<e.length;n++){let r=ji(e[n]);for(let e in r)t[e]=r[e]}return t}function Ni(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Pi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Ii={clone:ji,merge:Mi},Li=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ri=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zi=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Li,this.fragmentShader=Ri,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Pi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new nn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new cn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bi=class extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Vi=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hi=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ui(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Wi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Gi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ki=class extends Gi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},qi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ji=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yi=class extends Gi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Qi(n,t,g,y,r);i[p]=Xi(x,o,_,b,m)}return i}};function Xi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Zi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Qi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Xi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Zi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var $i=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Wi(e.settings)&&(n.settings={inTangents:Ui(e.settings.inTangents,Array),outTangents:Ui(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Be:t=this.InterpolantFactoryMethodDiscrete;break;case Ve:t=this.InterpolantFactoryMethodLinear;break;case He:t=this.InterpolantFactoryMethodSmooth;break;case Ue:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Be;case this.InterpolantFactoryMethodLinear:return Ve;case this.InterpolantFactoryMethodSmooth:return He;case this.InterpolantFactoryMethodBezier:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Wi(this.settings)&&(ea(this.settings.inTangents,e),ea(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&nt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===He,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Wi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ea(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}$i.prototype.ValueTypeName=``,$i.prototype.TimeBufferType=Float32Array,$i.prototype.ValueBufferType=Float32Array,$i.prototype.DefaultInterpolation=Ve;var ta=class extends $i{constructor(e,t,n){super(e,t,n)}};ta.prototype.ValueTypeName=`bool`,ta.prototype.ValueBufferType=Array,ta.prototype.DefaultInterpolation=Be,ta.prototype.InterpolantFactoryMethodLinear=void 0,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};na.prototype.ValueTypeName=`color`;var ra=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};ra.prototype.ValueTypeName=`number`;var ia=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},aa=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName=`quaternion`,aa.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends $i{constructor(e,t,n){super(e,t,n)}};oa.prototype.ValueTypeName=`string`,oa.prototype.ValueBufferType=Array,oa.prototype.DefaultInterpolation=Be,oa.prototype.InterpolantFactoryMethodLinear=void 0,oa.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};sa.prototype.ValueTypeName=`vector`;var ca=new q,la=new Rt,ua=new q,da=class extends Fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=et,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,la,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,ua.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ca,la,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fa=new q,pa=new K,ma=new K,ha=class extends da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ht*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ht*2*Math.atan(Math.tan(mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fa.x,fa.y).multiplyScalar(-e/fa.z),fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fa.x,fa.y).multiplyScalar(-e/fa.z)}getViewSize(e,t){return this.getViewBounds(e,pa,ma),t.subVectors(ma,pa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ga=class extends da{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_a=-90,va=1,ya=class extends Fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ha(_a,va,e,t);r.layers=this.layers,this.add(r);let i=new ha(_a,va,e,t);i.layers=this.layers,this.add(i);let a=new ha(_a,va,e,t);a.layers=this.layers,this.add(a);let o=new ha(_a,va,e,t);o.layers=this.layers,this.add(o);let s=new ha(_a,va,e,t);s.layers=this.layers,this.add(s);let c=new ha(_a,va,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ba=class extends ha{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xa=`\\[\\]\\.:\\/`,Sa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ca=`[^\\[\\]\\.:\\/]`,wa=`[^`+xa.replace(`\\.`,``)+`]`,Ta=`((?:WC+[\\/:])*)`.replace(`WC`,Ca),Ea=`(WCOD+)?`.replace(`WCOD`,wa),Da=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ca),Oa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ca),ka=RegExp(`^`+Ta+Ea+Da+Oa+`$`),Aa=[`material`,`materials`,`bones`,`map`],ja=class{constructor(e,t,n){let r=n||Ma.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ma=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Sa,``)}static parseTrackName(e){let t=ka.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Aa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ma.Composite=ja,Ma.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ma.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ma.prototype.GetterByBindingType=[Ma.prototype._getValue_direct,Ma.prototype._getValue_array,Ma.prototype._getValue_arrayElement,Ma.prototype._getValue_toArray],Ma.prototype.SetterByBindingTypeAndVersioning=[[Ma.prototype._setValue_direct,Ma.prototype._setValue_direct_setNeedsUpdate,Ma.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ma.prototype._setValue_array,Ma.prototype._setValue_array_setNeedsUpdate,Ma.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ma.prototype._setValue_arrayElement,Ma.prototype._setValue_arrayElement_setNeedsUpdate,Ma.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ma.prototype._setValue_fromArray,Ma.prototype._setValue_fromArray_setNeedsUpdate,Ma.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Na(e,t,n,r){let i=Pa(r);switch(n){case I:return e*t;case ie:return e*t/i.components*i.byteLength;case ae:return e*t/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case se:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case ce:return e*t*4/i.components*i.byteLength;case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:case R:return Math.max(e,16)*Math.max(t,8)/4;case pe:case he:return Math.max(e,8)*Math.max(t,8)/2;case ge:case _e:case z:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case B:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case V:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Me:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case H:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ne:case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Pa(e){switch(e){case w:case T:return{byteLength:1,components:1};case D:case E:case j:return{byteLength:2,components:1};case M:case N:return{byteLength:2,components:4};case k:case O:case A:return{byteLength:4,components:1};case P:case F:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Fa(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ia(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} `,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} `,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN

 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

 		irradiance *= sheenEnergyComp;

 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif

				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN

		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},La={basic:{uniforms:Mi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:Mi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:Mi([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:Mi([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:Mi([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:Mi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:Mi([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:Mi([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:Mi([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:Mi([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:Mi([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:Mi([Z.common,Z.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:Mi([Z.lights,Z.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};La.physical={uniforms:Mi([La.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Ra={r:0,b:0,g:0},za=new cn,Ba=new J;Ba.set(-1,0,0,0,1,0,0,0,1);function Va(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ci(new ki(1,1,1),new zi({name:`BackgroundCubeMaterial`,uniforms:ji(La.backgroundCube.uniforms),vertexShader:La.backgroundCube.vertexShader,fragmentShader:La.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(za.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ba),l.material.toneMapped=Gt.getTransfer(i.colorSpace)!==Ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ci(new Ai(2,2),new zi({name:`BackgroundMaterial`,uniforms:ji(La.background.uniforms),vertexShader:La.background.vertexShader,fragmentShader:La.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ra,Fi(e)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ha(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ua(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Wa(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ga(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hr,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ka=4,qa=6,Ja=20,Ya=256,Xa=new ga,Za=new Y,Qa=null,$a=0,eo=0,to=!1,no=new q,ro=new q,io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=no}=i;Qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,$a,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:x,minFilter:x,generateMipmaps:!1,type:j,format:ne,colorSpace:Ye,depthBuffer:!1},r=oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ao(r)),this._blurMaterial=lo(r,e,t),this._ggxMaterial=co(r,e,t)}return r}_compileMaterial(e){let t=new ci(new Rr,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,r,i){let a=new ha(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Za),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new ki,new Xr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Za),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;so(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;so(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ka?n-d+Ka:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,so(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Xa),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,so(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Xa)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];so(t,3*l*(r>this._lodMax-Ka?r-this._lodMax+Ka:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Xa)}};function ao(e){let t=[],n=[],r=e,i=e-Ka+1+qa;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ro.set(1,r,n):e===1?ro.set(-n,1,-r):e===2?ro.set(-n,r,1):e===3?ro.set(-1,r,-n):e===4?ro.set(-n,-1,r):ro.set(n,r,-1),ro.toArray(l,(e*6+t)*3)}}let u=new Rr;u.setAttribute(`position`,new Cr(c,3)),u.setAttribute(`outputDirection`,new Cr(l,3)),n.push(new ci(u,null)),r>Ka&&r--}return{lodMeshes:n,sizeLods:t}}function oo(e,t,n){let r=new an(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function so(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function co(e,t,n){return new zi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ya,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10;
			}

			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N;

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {

						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lo(e,t,n){return new zi({name:`SphericalGaussianBlur`,defines:{SAMPLES:Ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uo(){return new zi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fo(){return new zi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mo=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ki(5,5,5),i=new zi({name:`CubemapFromEquirect`,uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=x),new ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ho(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new mo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new io(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new io(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function go(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function _o(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Tr:wr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function vo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function yo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function bo(e,t,n){let r=new WeakMap,i=new nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new on(h,p,m,u);g.type=A,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function xo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var So={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Co(e,t,n,r,i,a){let o=new an(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Rr;l.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let u=new Bi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ci(l,u),f=new ga(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new an(t,n,{type:j,depthBuffer:!1,stencilBuffer:!1}),c=new an(t,n,{type:j,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Gt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=So[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var wo=new tn,To=new Ei(1,1),Eo=new on,Do=new sn,Oo=new wi,ko=[],Ao=[],jo=new Float32Array(16),Mo=new Float32Array(9),No=new Float32Array(4);function Po(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ko[i];if(a===void 0&&(a=new Float32Array(i),ko[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Fo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Io(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Lo(e,t){let n=Ao[t];n===void 0&&(n=new Int32Array(t),Ao[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ro(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fo(n,t))return;e.uniform2fv(this.addr,t),Io(n,t)}}function Bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fo(n,t))return;e.uniform3fv(this.addr,t),Io(n,t)}}function Vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fo(n,t))return;e.uniform4fv(this.addr,t),Io(n,t)}}function Ho(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Io(n,t)}else{if(Fo(n,r))return;No.set(r),e.uniformMatrix2fv(this.addr,!1,No),Io(n,r)}}function Uo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Io(n,t)}else{if(Fo(n,r))return;Mo.set(r),e.uniformMatrix3fv(this.addr,!1,Mo),Io(n,r)}}function Wo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Fo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Io(n,t)}else{if(Fo(n,r))return;jo.set(r),e.uniformMatrix4fv(this.addr,!1,jo),Io(n,r)}}function Go(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fo(n,t))return;e.uniform2iv(this.addr,t),Io(n,t)}}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fo(n,t))return;e.uniform3iv(this.addr,t),Io(n,t)}}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fo(n,t))return;e.uniform4iv(this.addr,t),Io(n,t)}}function Yo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fo(n,t))return;e.uniform2uiv(this.addr,t),Io(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fo(n,t))return;e.uniform3uiv(this.addr,t),Io(n,t)}}function Qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fo(n,t))return;e.uniform4uiv(this.addr,t),Io(n,t)}}function $o(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(To.compareFunction=n.isReversedDepthBuffer()?518:515,a=To):a=wo,n.setTexture2D(t||a,i)}function es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Do,i)}function ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Oo,i)}function ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Eo,i)}function rs(e){switch(e){case 5126:return Ro;case 35664:return zo;case 35665:return Bo;case 35666:return Vo;case 35674:return Ho;case 35675:return Uo;case 35676:return Wo;case 5124:case 35670:return Go;case 35667:case 35671:return Ko;case 35668:case 35672:return qo;case 35669:case 35673:return Jo;case 5125:return Yo;case 36294:return Xo;case 36295:return Zo;case 36296:return Qo;case 35678:case 36198:case 36298:case 36306:case 35682:return $o;case 35679:case 36299:case 36307:return es;case 35680:case 36300:case 36308:case 36293:return ts;case 36289:case 36303:case 36311:case 36292:return ns}}function is(e,t){e.uniform1fv(this.addr,t)}function as(e,t){let n=Po(t,this.size,2);e.uniform2fv(this.addr,n)}function os(e,t){let n=Po(t,this.size,3);e.uniform3fv(this.addr,n)}function ss(e,t){let n=Po(t,this.size,4);e.uniform4fv(this.addr,n)}function cs(e,t){let n=Po(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ls(e,t){let n=Po(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function us(e,t){let n=Po(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ds(e,t){e.uniform1iv(this.addr,t)}function fs(e,t){e.uniform2iv(this.addr,t)}function ps(e,t){e.uniform3iv(this.addr,t)}function ms(e,t){e.uniform4iv(this.addr,t)}function hs(e,t){e.uniform1uiv(this.addr,t)}function gs(e,t){e.uniform2uiv(this.addr,t)}function _s(e,t){e.uniform3uiv(this.addr,t)}function vs(e,t){e.uniform4uiv(this.addr,t)}function ys(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?To:wo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function bs(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Do,a[e])}function xs(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Oo,a[e])}function Ss(e,t,n){let r=this.cache,i=t.length,a=Lo(n,i);Fo(r,a)||(e.uniform1iv(this.addr,a),Io(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Eo,a[e])}function Cs(e){switch(e){case 5126:return is;case 35664:return as;case 35665:return os;case 35666:return ss;case 35674:return cs;case 35675:return ls;case 35676:return us;case 5124:case 35670:return ds;case 35667:case 35671:return fs;case 35668:case 35672:return ps;case 35669:case 35673:return ms;case 5125:return hs;case 36294:return gs;case 36295:return _s;case 36296:return vs;case 35678:case 36198:case 36298:case 36306:case 35682:return ys;case 35679:case 36299:case 36307:return bs;case 35680:case 36300:case 36308:case 36293:return xs;case 36289:case 36303:case 36311:case 36292:return Ss}}var ws=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rs(t.type)}},Ts=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cs(t.type)}},Es=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ds=/(\w+)(\])?(\[|\.)?/g;function Os(e,t){e.seq.push(t),e.map[t.id]=t}function ks(e,t,n){let r=e.name,i=r.length;for(Ds.lastIndex=0;;){let a=Ds.exec(r),o=Ds.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Os(n,l===void 0?new ws(s,e,t):new Ts(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Es(s),Os(n,e)),n=e}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ks(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function js(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ms=37297,Ns=0;function Ps(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Fs=new J;function Is(e){Gt._getMatrix(Fs,Gt.workingColorSpace,e);let t=`mat3( ${Fs.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ls(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ps(e.getShaderSource(t),r)}return i}function Rs(e,t){let n=Is(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var zs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Bs(e,t){let n=zs[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Vs=new q;function Hs(){return Gt.getLuminanceCoefficients(Vs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Vs.x.toFixed(4)}, ${Vs.y.toFixed(4)}, ${Vs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Us(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ks).join(`
`)}function Ws(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Gs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ks(e){return e!==``}function qs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Js(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ys=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(e){return e.replace(Ys,Qs)}var Zs=new Map;function Qs(e,t){let n=X[t];if(n===void 0){let e=Zs.get(t);if(e!==void 0)n=X[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Xs(n)}var $s=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(e){return e.replace($s,tc)}function tc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function nc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var rc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ic(e){return rc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ac={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function oc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ac[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var sc={302:`ENVMAP_MODE_REFRACTION`};function cc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:sc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var lc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function uc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:lc[e.combine]||`ENVMAP_BLENDING_NONE`}function dc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function fc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ic(n),l=oc(n),u=cc(n),d=uc(n),f=dc(n),p=Us(n),m=Ws(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ks).join(`
`),_.length>0&&(_+=`
`)):(g=[nc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ks).join(`
`),_=[nc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Bs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Rs(`linearToOutputTexel`,n.outputColorSpace),Hs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ks).join(`
`)),o=Xs(o),o=qs(o,n),o=Js(o,n),s=Xs(s),s=qs(s,n),s=Js(s,n),o=ec(o),s=ec(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=js(i,i.VERTEX_SHADER,y),S=js(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ls(i,x,`vertex`),n=Ls(i,S,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new As(i,h),T=Gs(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ms)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ns++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var pc=0,mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hc(e),t.set(e,n)),n}},hc=class{constructor(e){this.id=pc++,this.code=e,this.usedTimes=0}};function gc(e){return e===1030||e===37490||e===36285}function _c(e,t,n,r,i,a){let o=new yn,s=new mc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=La[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!x,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,L=!!i.normalMap,ie=!!i.displacementMap,ae=!!i.emissiveMap,oe=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=ce&&!!i.anisotropyMap,R=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,ve=fe&&!!i.iridescenceMap,z=fe&&!!i.iridescenceThicknessMap,ye=pe&&!!i.sheenColorMap,be=pe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=me&&!!i.transmissionMap,Te=me&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&x.mapping,envMapCubeUVHeight:S,aoMap:te,lightMap:ne,bumpMap:re,normalMap:L,displacementMap:ie,emissiveMap:ae,normalMapObjectSpace:L&&i.normalMapType===1,normalMapTangentSpace:L&&i.normalMapType===0,packedNormalMap:L&&i.normalMapType===0&&gc(i.normalMap.format),metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:he,clearcoat:le,clearcoatMap:R,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ve,iridescenceThicknessMap:z,sheen:pe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:me,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:B,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:te&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:L&&m(i.normalMap.channel),displacementMapUv:ie&&m(i.displacementMap.channel),emissiveMapUv:ae&&m(i.emissiveMap.channel),metalnessMapUv:oe&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:R&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:z&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(L||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&L===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=La[t];n=Ii.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new fc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function vc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function yc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function bc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||yc),r.length>1&&r.sort(t||bc),i.length>1&&i.sort(t||bc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Sc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new xc,e.set(t,[i])):n>=r.length?(i=new xc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Cc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Y};break;case`SpotLight`:n={position:new q,direction:new q,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function wc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Tc=0;function Ec(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Dc(e){let t=new Cc,n=wc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new cn,o=new cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ec);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Tc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Oc(e){let t=new Dc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function kc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Oc(e),t.set(n,[a])):r>=i.length?(a=new Oc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ac=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mc=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Nc=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Pc=new cn,Fc=new q,Ic=new q;function Lc(e,t,n){let r=new hi,i=new K,a=new K,o=new nn,s=new Vi,c=new Hi,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Ac,fragmentShader:jc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Rr;m.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ci(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new an(i.x,i.y,{format:oe,type:j,minFilter:x,magFilter:x,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ei(i.x,i.y,A),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=re,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=v,d.map.depthTexture.magFilter=v}else l.isPointLight?(d.map=new mo(i.x),d.map.depthTexture=new Di(i.x,k)):(d.map=new an(i.x,i.y),d.map.depthTexture=new Ei(i.x,i.y,k)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=re,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=x,d.map.depthTexture.magFilter=x):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=v,d.map.depthTexture.magFilter=v);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Fc.setFromMatrixPosition(l.matrixWorld),e.position.copy(Fc),Ic.copy(e.position),Ic.add(Mc[t]),e.up.copy(Nc[t]),e.lookAt(Ic),e.updateMatrixWorld(),n.makeTranslation(-Fc.x,-Fc.y,-Fc.z),Pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Pc,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new an(i.x,i.y,{format:oe,type:j}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Rc(e,t){function n(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ut[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let F=null,I={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new nn().fromArray(te),L=new nn().fromArray(ne);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),he(!1),R(1),oe(e.CULL_FACE),pe(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(oe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function R(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ve(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function z(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function ye(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function be(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Me(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,I={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:R,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:z,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:Ne,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:Me,reset:Pe}}function zc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return m?new OffscreenCanvas(e,t):rt(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=w(n,a));let o=t?w(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Xe:Gt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ee(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t)}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&P(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function P(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function F(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let I=0;function te(){I=0}function ne(){return I}function re(e){I=e}function ie(){let e=I;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),I+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){_e(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[h]:e.REPEAT,[g]:e.CLAMP_TO_EDGE,[_]:e.MIRRORED_REPEAT},de={[v]:e.NEAREST,[y]:e.NEAREST_MIPMAP_NEAREST,[b]:e.NEAREST_MIPMAP_LINEAR,[x]:e.LINEAR,[S]:e.LINEAR_MIPMAP_NEAREST,[C]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function R(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=he(n.start,r.width,4),c=he(t.start,r.width,4);n.start<=i+1&&a===c&&he(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ge(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=me(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=ke(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);pe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=j(o,t);if(o.isDepthTexture)m=A(o.format===L,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&R(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=Na(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=Na(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Ae(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Ae(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,o,s){if(o.image.length!==6)return;let c=me(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ke(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);pe(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ae(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,De(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function z(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else oe(i.depthTexture,0);let u=l.__webglTexture,d=De(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),z(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),z(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&ve(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),z(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ve(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),ve(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ve(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ve(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(l),Te.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function B(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Bc(e,t){function n(n,r=``){let i,a=Gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Vc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zi({vertexShader:Vc,fragmentShader:Hc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends dt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Uc,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,T=null,E=new ha;E.viewport=new nn;let D=new ha;D.viewport=new nn;let O=[E,D],A=new ba,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getHandSpace()};function N(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,F);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}j=null,M=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,F),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?L:re,a=_.stencil?ee:k);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new an(d.textureWidth,d.textureHeight,{format:ne,type:w,depthTexture:new Ei(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new an(f.framebufferWidth,f.framebufferHeight,{format:ne,type:w,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function F(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let I=new q,te=new q;function ie(e,t,n){I.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=I.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ae(A,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,A,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ht*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=O[n];o===void 0&&(o=new ha,o.layers.enable(n),o.viewport=new nn,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Oi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let le=new Fa;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Gc=new cn,Kc=new J;Kc.set(-1,0,0,0,1,0,0,0,1);function qc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Fi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Gc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Kc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Jc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Yc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xc=null;function Zc(){return Xc===null&&(Xc=new di(Yc,16,16,oe,j),Xc.name=`DFG_LUT`,Xc.minFilter=x,Xc.magFilter=x,Xc.wrapS=g,Xc.wrapT=g,Xc.generateMipmaps=!1,Xc.needsUpdate=!0),Xc}var Qc=class{constructor(e={}){let{canvas:t=it(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=w}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ce,se,ae]),g=new Set([w,k,D,ee,M,N]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],T=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,A=!1,P=null,F=null,I=null,te=null;this._outputColorSpace=Je;let ne=0,re=0,L=null,ie=-1,oe=null,le=new nn,ue=new nn,de=null,fe=new Y(0),pe=0,me=t.width,he=t.height,R=1,ge=null,_e=null,ve=new nn(0,0,me,he),z=new nn(0,0,me,he),ye=!1,be=new hi,xe=!1,Se=!1,Ce=new cn,we=new q,Te=new nn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return L===null?R:1}let B=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,V,Me,H,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,tt,!1),t.addEventListener(`webglcontextrestored`,nt,!1),t.addEventListener(`webglcontextcreationerror`,rt,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),W(`WebGLRenderer: `+e.message),e}function Qe(){Ae=new go(B),Ae.init(),Ye=new Bc(B,Ae),je=new Wa(B,Ae,e,Ye),V=new Rc(B,Ae),je.reversedDepthBuffer&&d&&V.buffers.depth.setReversed(!0),F=B.createFramebuffer(),I=B.createFramebuffer(),te=B.createFramebuffer(),Me=new yo(B),H=new vc,Ne=new zc(B,Ae,V,H,je,Ye,Me),Pe=new ho(O),Fe=new Ia(B),Xe=new Ha(B,Fe),Ie=new _o(B,Fe,Me,Xe),Le=new xo(B,Ie,Fe,Xe,Me),Ge=new bo(B,je,Ne),He=new Ga(H),Re=new _c(O,Pe,Ae,je,Xe,He),ze=new qc(O,H),Be=new Sc,Ve=new kc(Ae),We=new Va(O,Pe,V,Le,p,s),Ue=new Lc(O,Le,je),Ze=new Jc(B,Me,je,V),Ke=new Ua(B,Ae,Me),qe=new vo(B,Ae,Me),Me.programs=Re.programs,O.capabilities=je,O.extensions=Ae,O.properties=H,O.renderLists=Be,O.shadowMap=Ue,O.state=V,O.info=Me}m!==1009&&(E=new Co(m,t.width,t.height,o,r,i));let $e=new Wc(O,B);this.xr=$e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(e){e!==void 0&&(R=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){if($e.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,he=n,t.width=Math.floor(e*R),t.height=Math.floor(n*R),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*R,he*R).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,R=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.viewport(le.copy(ve).multiplyScalar(R).round())},this.getScissor=function(e){return e.copy(z)},this.setScissor=function(e,t,n,r){e.isVector4?z.set(e.x,e.y,e.z,e.w):z.set(e,t,n,r),V.scissor(ue.copy(z).multiplyScalar(R).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=h.has(t)}if(e){let e=L.texture.type,t=g.has(e),n=We.getClearColor(),r=We.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,B.clearBufferiv(B.COLOR,0,v))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),We.dispose(),Be.dispose(),Ve.dispose(),H.dispose(),Pe.dispose(),Le.dispose(),Xe.dispose(),Ze.dispose(),Re.dispose(),$e.dispose(),$e.removeEventListener(`sessionstart`,pt),$e.removeEventListener(`sessionend`,mt),ht.stop()};function tt(e){e.preventDefault(),ot(`WebGLRenderer: Context Lost.`),A=!0}function nt(){ot(`WebGLRenderer: Context Restored.`),A=!1;let e=Me.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;Qe(),Me.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function rt(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),st(t)}function st(e){ct(e),H.remove(e)}function ct(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Fe.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),xe===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),x=Ve.get(n),x.init(t),T.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),P!==null&&P.updateLights(x.state.lightsArray),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),xe===!0&&He.setGlobalState(this.clippingPlanes,t),P!==null&&Ue.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),x=T.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=H.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Fa;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,$e.setAnimationLoop(e),e===null?ht.stop():ht.start()},$e.addEventListener(`sessionstart`,pt),$e.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;P!==null&&P.renderStart(e,t);let n=$e.enabled===!0&&$e.isPresenting===!0,r=E!==null&&(L===null||n)&&E.begin(O,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(t),t=$e.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,L),x=Ve.get(e,T.length),x.init(t),x.state.textureUnits=Ne.getTextureUnits(),T.push(x),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,et,t.reversedDepth),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),b=Be.get(e,S.length),b.init(),S.push(b),$e.enabled===!0&&$e.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,O.sortObjects)}gt(e,t,0,O.sortObjects),b.finish(),P!==null&&P.updateLights(x.state.lightsArray),O.sortObjects===!0&&b.sort(ge,_e),De=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,De&&We.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&He.beginShadows();let i=x.state.shadowsArray;if(Ue.render(i,e,t),xe===!0&&He.endShadows(),(r&&E.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}De&&We.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(b,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),De&&We.render(e),_t(b,e,t)}L!==null&&re===0&&(Ne.updateMultisampleRenderTarget(L),Ne.updateRenderTargetMipmap(L)),r&&E.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),Xe.resetDefaultState(),ie=-1,oe=null,T.pop(),T.length>0?(x=T[T.length-1],Ne.setTextureUnits(x.state.textureUnits),xe===!0&&He.setGlobalState(O.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,P!==null&&P.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Le.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Te.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Te.z,s,t)}}else a.visible&&b.push(e,i,a,n,Te.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),xe===!0&&He.setGlobalState(O.clippingPlanes,n),r&&V.viewport(le.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new an(1,1,{generateMipmaps:!0,type:e?j:w,minFilter:C,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*O.transmissionResolutionScale,o.w*O.transmissionResolutionScale);let s=O.getRenderTarget(),c=O.getActiveCubeFace(),l=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(fe),pe=O.getClearAlpha(),pe<1&&O.setClearColor(16777215,.5),O.clear(),De&&We.render(n);let u=O.toneMapping;O.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),xe===!0&&He.setGlobalState(O.clippingPlanes,r),yt(e,n,r),Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a))}O.setRenderTarget(s,c,l),O.setClearColor(fe,pe),d!==void 0&&(r.viewport=d),O.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=Ee);let r=H.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=Re.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,O),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),Ct(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=As.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Ne.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?O.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=x.state.lights;if(xe===!0&&(Se===!0||e!==oe)){let t=e===oe&&r.id===ie;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=xt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(V.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=wt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||oe!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(B,`projectionMatrix`,e.projectionMatrix),E.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(B,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&E.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(B,`sunShadowMap`,y.state.sunShadowMap,Ne),y.state.directionalShadowMap.length>0&&E.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Ne),y.state.spotShadowMap.length>0&&E.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Ne),y.state.pointShadowMap.length>0&&E.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Ne)),i.isSkinnedMesh){E.setOptional(B,i,`bindMatrix`),E.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(B,`boneTexture`,e.boneTexture,Ne))}i.isBatchedMesh&&(E.setOptional(B,i,`batchingTexture`),E.setValue(B,`batchingTexture`,i._matricesTexture,Ne),E.setOptional(B,i,`batchingIdTexture`),E.setValue(B,`batchingIdTexture`,i._indirectTexture,Ne),E.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(B,`batchingColorTexture`,i._colorsTexture,Ne));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ge.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Zc()),w){if(E.setValue(B,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&Et(D,T),a&&r.fog===!0&&ze.refreshFogUniforms(D,a),ze.refreshMaterialUniforms(D,r,R,he,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}As.upload(B,St(v),D,Ne)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(As.upload(B,St(v),D,Ne),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(B,`center`,i.center),E.setValue(B,`modelViewMatrix`,i.modelViewMatrix),E.setValue(B,`normalMatrix`,i.normalMatrix),E.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ze.update(n,S),Ze.bind(n,S)}}return S}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,V.viewport(le),V.scissor(ue),V.setScissorTest(de),ie=-1;return}if(o.__webglFramebuffer===void 0)Ne.setupRenderTarget(e);else if(o.__hasExternalTextures)Ne.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ne.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ne.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(ve).multiplyScalar(R).floor(),ue.copy(z).multiplyScalar(R).floor(),de=ye;if(n!==0&&(r=F),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(le),V.scissor(ue),V.setScissorTest(de),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function Ot(e){let t=H.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Ye.convert(c),Ye.convert(l),a)}finally{let e=L===null?null:H.get(L).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Ye.convert(l),Ye.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=L===null?null:H.get(L).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await lt(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ne.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ye.convert(t.format),_=Ye.convert(t.type),v;t.isData3DTexture?(Ne.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ne.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Ne.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,I),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&Ne.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ne.setTextureCube(e,0):e.isData3DTexture?Ne.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ne.setTexture2DArray(e,0):Ne.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){ne=0,re=0,L=null,V.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return et}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}},$c=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g  = step(x0.yzx, x0.xyz);
  vec3 l  = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns  = n_ * D.wyz - D.xzx;

  vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

vec3 snoiseVec3(vec3 x) {
  return vec3(
    snoise(x),
    snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2)),
    snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4))
  );
}

vec3 curlNoise(vec3 p) {
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);
  vec3 px0 = snoiseVec3(p - dx);
  vec3 px1 = snoiseVec3(p + dx);
  vec3 py0 = snoiseVec3(p - dy);
  vec3 py1 = snoiseVec3(p + dy);
  vec3 pz0 = snoiseVec3(p - dz);
  vec3 pz1 = snoiseVec3(p + dz);
  float x = py1.z - py0.z - pz1.y + pz0.y;
  float y = pz1.x - pz0.x - px1.z + px0.z;
  float z = px1.y - px0.y - py1.x + py0.x;
  return normalize(vec3(x, y, z) / (2.0 * e));
}

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
`,el=`

float developed(vec2 q, float near, float progress) {
  if (progress <= 0.0) return 0.0;
  if (progress >= 1.0) return 1.0;
  float n = 0.5 + 0.5 * snoise(vec3(q * 3.0, 1.3));
  float k = mix(1.0 - near, n, 0.45);
  const float W = 0.3;
  return smoothstep(k, k + W, progress * (1.0 + W));
}

uniform sampler2D uBrush;
uniform float uBrushAmount;
uniform float uBrushRough;

float brushWear(vec2 screenUv) {
  if (uBrushAmount <= 0.0) return 0.0;
  return texture2D(uBrush, screenUv).r * uBrushAmount;
}

float brushMask(float wear, vec2 q) {
  if (wear <= 0.0) return 0.0;
  float n = 0.5 + 0.5 * (0.5 * snoise(vec3(q * 5.0, 1.3)) + 0.3 * snoise(vec3(q * 16.0, 7.9))
                       + 0.2 * snoise(vec3(q * 45.0, 3.1)));
  float k = mix(0.5, 0.04 + 0.92 * n, uBrushRough);
  return smoothstep(k - 0.05, k + 0.05, wear);
}

float splitMask(vec2 screenPos, vec2 axis, float edge, float soft, float rough) {
  float x = dot(screenPos, axis);
  float along = dot(screenPos, vec2(-axis.y, axis.x));
  float reach = soft * 0.5 + rough;
  if (x < edge - reach) return 0.0;
  if (x > edge + reach) return 1.0;
  if (rough > 0.0) {
    x += rough * (0.7 * snoise(vec3(along * 1.6, edge * 1.3, 2.7))
                + 0.3 * snoise(vec3(along * 7.0, edge * 4.1, 5.9)));
  }
  return smoothstep(edge - soft * 0.5, edge + soft * 0.5, x);
}
`,tl=`
invariant gl_Position;

attribute vec2 aUV;
attribute vec3 aTextPos;
attribute float aSeed;
attribute float aShapeKeep;

uniform sampler2D uColorMap;
uniform sampler2D uDepthMap;
uniform vec2  uPlaneSize;
uniform float uTime;
uniform float uAssemble;

const int FLY_STEPS = 64;
uniform float uFly;
uniform float uFlyClock;
uniform float uFlyShown;
uniform float uFlyLaunch[FLY_STEPS + 1];
uniform float uFlyTime;
uniform float uFlySpread;
uniform vec3  uFlyEye;
uniform float uFlyCap;
uniform float uFlyLoose;

uniform float uLife;
uniform float uLifeMove;
uniform float uLifeRest;
uniform float uLifeRestless;
uniform float uLifeSpeed;
uniform int   uAssembleOrder;
uniform float uAssembleFront;
uniform float uProgress;
uniform float uStagger;
uniform float uCurlAmp;
uniform float uNoiseScale;
uniform float uCurlSpeed;
uniform float uBurst;
uniform float uSwirl;
uniform float uZPush;
uniform int   uOrder;
uniform int   uEase;
uniform vec2  uTextHalf;
uniform vec3  uTextOffset;
uniform vec2  uMouse;
uniform float uAspect;
uniform float uRepelRadius;
uniform float uRepelForce;
uniform float uRepelDepth;
uniform float uDepthScale;
uniform float uDepthCurve;
uniform float uDepthFade;
uniform float uEdgeCutoff;
uniform vec2  uEdgeStep;
uniform float uDropout;
uniform float uJitter;
uniform float uScatter;
uniform float uSpread;
uniform float uSize;
uniform float uSizeRandom;
uniform float uCellPx;
uniform float uRefDist;
uniform float uSizeAttenuation;
uniform float uFocus;
uniform float uAperture;
uniform float uBrightness;
uniform int   uColorMode;
uniform vec3  uDuoA;
uniform vec3  uDuoB;
uniform vec3  uInk;
uniform float uPhoto;
uniform float uSplit;
uniform float uSplitSoft;
uniform float uSplitRough;
uniform vec2 uSplitAxis;
uniform float uDust;
uniform float uGlow;
uniform float uShape;
uniform float uShapeScale;
uniform vec2  uShapeZ;
uniform float uShapeDot;
uniform float uShapeFar;
uniform float uShapeSizeRandom;

varying vec3  vColor;
varying float vAlpha;
varying float vSize;
varying float vBlur;
varying float vCover;

const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

const float FRAME_H = 2.0;
const float PI = 3.14159265359;
const float TAU = 6.28318530718;

const float BORN_FADE = 0.06;

const float BORN_CURVE = 2.5;

float bornKey(float r) {
  if (uAssembleOrder == 0) return r;
  vec2 w = clamp(aTextPos.xy / max(uTextHalf, vec2(1e-3)) * 0.5 + 0.5, 0.0, 1.0);
  float k = uAssembleOrder == 1 ? w.y : uAssembleOrder == 2 ? 1.0 - w.y : uAssembleOrder == 3 ? w.x : 1.0 - w.x;
  return mix(k, r, uAssembleFront);
}

float easeInOutCubic(float t) {
  return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
}

float ease(float t) {
  if (uEase == 1) return 0.5 - 0.5 * cos(PI * t);
  if (uEase == 2) return t >= 1.0 ? 1.0 : 1.0 - pow(2.0, -10.0 * t);
  if (uEase == 3) { float u = t - 1.0; return 1.0 + 2.70158 * u * u * u + 1.70158 * u * u; }
  if (uEase == 4) return t;
  return easeInOutCubic(t);
}

float orderKey(float near, float tone) {
  if (uOrder == 0) return aSeed;
  vec2 w = clamp(aTextPos.xy / max(uTextHalf, vec2(1e-3)) * 0.5 + 0.5, 0.0, 1.0);
  float k;
  if (uOrder == 1)      k = w.x;
  else if (uOrder == 2) k = 1.0 - w.x;
  else if (uOrder == 3) k = 1.0 - w.y;
  else if (uOrder == 4) k = w.y;
  else if (uOrder == 5) k = length(w - 0.5) * 1.41421;
  else if (uOrder == 6) k = 1.0 - length(w - 0.5) * 1.41421;
  else if (uOrder == 7) k = 1.0 - near;
  else                  k = 1.0 - tone;
  return clamp(mix(k, aSeed, 0.2), 0.0, 1.0);
}

void cull() {
  gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
  gl_PointSize = 0.0;
  vAlpha = 0.0;
}

void main() {
  float rDrop  = hash11(aSeed * 7919.0 + 0.5);
  float rJitA  = hash11(aSeed * 104729.0 + 1.7);
  float rJitB  = hash11(aSeed * 15485.0 + 3.1);
  float rLoose = hash11(aSeed * 3571.0 + 5.3);
  float rSize  = hash11(aSeed * 2749.0 + 7.9);
  float rDist  = hash11(aSeed * 4441.0 + 9.2);
  float rBorn  = hash11(aSeed * 7727.0 + 13.7);
  float rSplit = hash11(aSeed * 911.0 + 17.3);
  vec3  rDir   = vec3(hash11(aSeed * 613.0 + 2.2), hash11(aSeed * 877.0 + 4.4), hash11(aSeed * 1291.0 + 6.6)) * 2.0 - 1.0;

  float born;
  float flare;
  float fly = 1.0;
  if (uFly > 0.5) {
    if (rBorn > uFlyShown) { cull(); return; }
    float x = rBorn * float(FLY_STEPS);
    int i = int(min(floor(x), float(FLY_STEPS - 1)));
    float launch = mix(uFlyLaunch[i], min(uFlyLaunch[i + 1], uFlyClock), x - float(i));
    fly = clamp((uFlyClock - launch) / uFlyTime, 0.0, 1.0);
    if (fly <= 0.0) { cull(); return; }
    born = smoothstep(0.0, 0.12, fly);
    flare = 0.4 * sin(fly * PI);
  } else {
    float shown = uAssembleOrder == 0 ? pow(uAssemble, BORN_CURVE) : uAssemble;
    born = clamp((shown * (1.0 + BORN_FADE) - bornKey(rBorn)) / BORN_FADE, 0.0, 1.0);
    if (born <= 0.0) { cull(); return; }
    flare = sin(born * PI);
  }

  vec2 q = aUV * uPlaneSize * 0.5;
  if (uDropout > 0.0) {
    float n = 0.65 * snoise(vec3(q * 2.5, 3.7)) + 0.35 * snoise(vec3(q * 11.0, 9.1));
    if (rDrop < uDropout * (1.0 + 1.2 * n)) { cull(); return; }
  }

  bool loose = rLoose < uScatter;

  if (!loose && uPhoto >= 1.0 && uProgress >= 1.0 && uJitter <= 0.0) {
    float d0 = pow(texture2D(uDepthMap, aUV).r, uDepthCurve);
    vec4 c0 = projectionMatrix * modelViewMatrix * vec4((aUV - 0.5) * uPlaneSize, (d0 - 0.5) * uDepthScale, 1.0);
    vec2 s0 = c0.xy / c0.w * vec2(uAspect, 1.0);
    bool inTrail = brushWear(c0.xy / c0.w * 0.5 + 0.5) > 0.0;

    bool inSplit = dot(s0, uSplitAxis) >= uSplit - uSplitSoft * 0.5 - uSplitRough - 0.01;
    if (!inTrail && !inSplit) { cull(); return; }
  }

  float gx = texture2D(uDepthMap, aUV + vec2(uEdgeStep.x, 0.0)).r
           - texture2D(uDepthMap, aUV - vec2(uEdgeStep.x, 0.0)).r;
  float gy = texture2D(uDepthMap, aUV + vec2(0.0, uEdgeStep.y)).r
           - texture2D(uDepthMap, aUV - vec2(0.0, uEdgeStep.y)).r;
  if (!loose && length(vec2(gx, gy)) > uEdgeCutoff) { cull(); return; }

  float d = pow(texture2D(uDepthMap, aUV).r, uDepthCurve);
  float near = uDepthScale >= 0.0 ? d : 1.0 - d;
  vec3 scenePos = vec3((aUV - 0.5) * uPlaneSize, (d - 0.5) * uDepthScale);
  scenePos.z += (rJitA + rJitB - 1.0) * uJitter * 0.15;

  vec3 src = texture2D(uColorMap, aUV).rgb;
  src = src * uBrightness / (1.0 + src * (uBrightness - 1.0));
  float tone = pow(dot(src, LUMA), 1.0 / 2.2);
  vec3 color;
  float alpha = 1.0;
  if (uColorMode == 0) {
    color = uInk;
    alpha = mix(0.15, 1.0, 1.0 - tone);
  } else if (uColorMode == 1) {
    color = uInk;
    alpha = mix(0.15, 1.0, tone);
  } else if (uColorMode == 2) {
    color = src;
  } else {
    color = mix(uDuoA, uDuoB, tone);
  }

  alpha *= mix(1.0, near, uDepthFade);

  if (loose) {
    float t = uTime * 0.15;
    scenePos += rDir * uSpread * (0.15 + 0.85 * rDist * rDist);
    scenePos += vec3(sin(t + rDir.x * TAU), sin(t * 1.3 + rDir.y * TAU), sin(t * 0.7 + rDir.z * TAU)) * 0.03;
    alpha *= 0.7;
  }

  float p = clamp((uProgress - orderKey(near, tone) * uStagger) / (1.0 - uStagger), 0.0, 1.0);
  p = ease(p);

  vec3 target = uShape > 0.5 ? aTextPos * uShapeScale + uTextOffset : aTextPos + uTextOffset;
  vec3 pos = mix(target, scenePos, p);

  float inShape = uShape > 0.5 ? 1.0 - p : 0.0;
  float shapeNear = clamp((aTextPos.z - uShapeZ.x) / (uShapeZ.y - uShapeZ.x), 0.0, 1.0);
  if (p > 0.0 && p < 1.0) {
    float env = sin(p * PI);
    pos += curlNoise(aTextPos * uNoiseScale + uTime * uCurlSpeed) * uCurlAmp * env;
    pos += normalize(vec3(aTextPos.xy, 0.0) + rDir * 0.35 + 1e-4) * uBurst * env * (0.6 + 0.8 * rDist);
    pos.z += uZPush * env * (0.5 + rDist);
    float a = uSwirl * env;
    pos.xy = uTextOffset.xy + mat2(cos(a), sin(a), -sin(a), cos(a)) * (pos.xy - uTextOffset.xy);
  }

  bool flying = fly < 1.0;
  if (flying) {
    float e = 1.0 - pow(1.0 - fly, 4.0);
    vec3 sight = pos - uFlyEye;
    vec3 outward = vec3(normalize(pos.xy - uTextOffset.xy + rDir.xy * 0.35 + 1e-4), 0.0);
    float aside = (1.0 - e) * (1.0 - e);
    vec3 place = pos;
    pos = uFlyEye + sight * mix(-0.04, 1.0, e) + outward * (uFlySpread * 0.12 * length(sight) * aside);

    vec3 field = vec3(place.xy * 1.3, uTime * 0.25);
    vec3 drift = vec3(snoise(field), snoise(field + vec3(17.1, 3.3, 0.0)), 0.5 * snoise(field + vec3(5.7, 29.9, 0.0)));
    pos += drift * uFlyLoose * FRAME_H * pow(1.0 - e, 1.5);
  }

  float rLife = hash11(aSeed * 3203.0 + 21.1);
  float rReach = hash11(aSeed * 6481.0 + 23.9);
  float wander = uLife * uLifeMove + (rLife < uLifeRestless ? uLifeRest : 0.0);
  if (wander > 0.0) {
    float reach = wander * FRAME_H * mix(0.25, 3.0, rReach * rReach * rReach);
    float t = uTime * TAU * uLifeSpeed * (0.6 + 0.8 * rJitA) + rDir.x * TAU;
    pos += reach * vec3(sin(t), sin(t * 1.31 + rDir.y * TAU), 0.5 * sin(t * 0.73 + rDir.z * TAU));
  }

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 screenPos = clip.xy / clip.w * vec2(uAspect, 1.0);

  alpha = mix(alpha, 1.0, flare) * born;
  if (inShape > 0.0) {
    float shapeAlpha = aShapeKeep * mix(uShapeFar, 1.0, shapeNear);
    alpha = mix(alpha, shapeAlpha, inShape);
    color = mix(color, vec3(1.0), inShape);
  }

  float split = smoothstep(0.0, 0.5, splitMask(screenPos, uSplitAxis, uSplit, uSplitSoft, uSplitRough)) > rSplit ? 1.0 : 0.0;
  float wear = brushWear(clip.xy / clip.w * 0.5 + 0.5);
  float hidden = developed(q, near, uPhoto) * (1.0 - max(brushMask(wear, q), split));
  alpha *= 1.0 + uGlow * wear * (1.0 - inShape);
  alpha *= 1.0 - hidden * (loose ? 1.0 - uDust : 1.0);
  if (alpha < 0.003) { cull(); return; }

  if (uRepelForce > 0.0 && inShape < 1.0) {
    float dist  = distance(screenPos, uMouse);
    float force = (1.0 - smoothstep(0.0, uRepelRadius, dist)) * uRepelForce * mix(1.0, near, uRepelDepth);
    clip.xy += normalize(screenPos - uMouse + 1e-5) * force * (1.0 - inShape) / vec2(uAspect, 1.0) * clip.w;
  }
  gl_Position = clip;
  float viewDist = max(-mv.z, 1e-3);

  float grain = mix(1.0, 0.35 + 2.4 * pow(rSize, 4.0), uSizeRandom) * (1.0 + 1.2 * flare);
  float sharp = uSize * grain * uCellPx * mix(1.0, uRefDist / viewDist, uSizeAttenuation);

  float focusDist = uRefDist - (uFocus - 0.5) * uDepthScale;
  float blurPx = abs(viewDist - focusDist) / uPlaneSize.y * uAperture * 40.0 * uCellPx;
  if (inShape > 0.0) {

    float rShape = hash11(dot(aTextPos, vec3(127.1, 311.7, 74.7)));
    float shapeGrain = mix(1.0, 0.35 + 2.4 * pow(rShape, 4.0), uShapeSizeRandom);
    sharp = mix(sharp, uShapeDot * shapeGrain * uRefDist / viewDist, inShape);
    blurPx *= 1.0 - inShape;
  }
  if (flying) {

    blurPx = min(blurPx * 0.12, uFlyCap);
    sharp = min(sharp, uFlyCap);
  }
  float size = sqrt(sharp * sharp + blurPx * blurPx);

  float cover = max((sharp * sharp) / (size * size), 0.02) * clamp(size * size, 0.0, 1.0);
  alpha *= cover;
  if (alpha < 0.003) { cull(); return; }
  size = max(size, 1.0);

  gl_PointSize = size;
  vSize = size;
  vBlur = 1.0 - sharp / size;
  vCover = cover;
  vColor = color;
  vAlpha = alpha;
}
`,nl=`varying vec3  vColor;
varying float vAlpha;
varying float vSize;
varying float vBlur;
varying float vCover;

void main() {
  float mask = 1.0;
  if (vSize > 2.0) {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float edge = mix(2.0 / vSize, 0.7, vBlur);
    mask = 1.0 - smoothstep(1.0 - edge, 1.0, r);
  }

#ifdef DEPTH_PASS

  if (vCover * mask < 0.5) discard;
  gl_FragColor = vec4(0.0);
#else
  float alpha = vAlpha * mask;
  if (alpha < 0.003) discard;
  gl_FragColor = vec4(vColor, alpha);
  #include <colorspace_fragment>
#endif
}
`,rl=`

uniform sampler2D uPhotoDepthMap;
uniform vec2  uPlaneSize;
uniform float uDepthScale;
uniform float uDepthCurve;

uniform float uBleed;

varying vec2  vUv;
varying float vNear;

void main() {
  vec2 u = (uv - 0.5) * (1.0 + 2.0 * uBleed) + 0.5;
  vec2 c = clamp(u, 0.0, 1.0);
  float d = pow(texture2D(uPhotoDepthMap, c).r, uDepthCurve);
  vNear = uDepthScale >= 0.0 ? d : 1.0 - d;
  vUv = c;
  vec3 p = vec3((u - 0.5) * uPlaneSize, (d - 0.5) * uDepthScale);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,il=`uniform sampler2D uPhotoMap;
uniform vec2  uPlaneSize;
uniform float uPhoto;
uniform float uGrain;
uniform float uGrainScale;
uniform float uTime;
uniform float uAspect;
uniform float uSplit;
uniform float uSplitSoft;
uniform float uSplitRough;
uniform vec2 uSplitAxis;
uniform vec2  uResolution;

uniform float uBlur;
uniform vec2  uPhotoSize;

varying vec2  vUv;
varying float vNear;

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 photoColor(vec2 uv) {
  if (uBlur <= 0.0) return texture2D(uPhotoMap, uv).rgb;
  float bias = max(log2(uBlur * uPhotoSize.y) - 2.0, 0.0);
  vec2 radius = vec2(uBlur * uPlaneSize.y / uPlaneSize.x, uBlur);
  vec3 sum = texture2D(uPhotoMap, uv, bias).rgb;
  for (int i = 0; i < 12; i++) {
    float a = float(i) * 2.39996;
    vec2 o = vec2(cos(a), sin(a)) * sqrt((float(i) + 0.5) / 12.0) * radius;
    sum += texture2D(uPhotoMap, uv + o, bias).rgb;
  }
  return sum / 13.0;
}

void main() {
  vec2 screenPos = (gl_FragCoord.xy / uResolution * 2.0 - 1.0) * vec2(uAspect, 1.0);
  vec2 q = vUv * uPlaneSize * 0.5;

  float cloud = max(brushMask(brushWear(gl_FragCoord.xy / uResolution), q),
                    smoothstep(0.5, 1.0, splitMask(screenPos, uSplitAxis, uSplit, uSplitSoft, uSplitRough)));
  float a = developed(q, vNear, uPhoto) * (1.0 - cloud);
  if (a < 0.003) discard;
  gl_FragColor = vec4(photoColor(vUv), a);
  #include <colorspace_fragment>

  gl_FragColor.rgb += (hash12(gl_FragCoord.xy + mod(floor(uTime * 24.0), 241.0) * 17.31) - 0.5) * uGrain * uGrainScale * 0.12;
}
`,al={particles:{count:3e5,countMobile:7e4,size:.5,sizeRandom:.5,sizeAttenuation:!0,density:1.5,depthDensity:1.5},depth:{scale:.6,curve:1,edgeCutoff:.12,fade:.4,occlusion:!0},look:{colorMode:`mono-light`,background:`#050507`,blending:`additive`,brightness:1.5,dropout:.1,jitter:.1,scatter:.03,spread:.5,duoA:`#1d2a6b`,duoB:`#ffb46b`,ink:``},morph:{word:`LIDAR`,hold:.8,duration:2.4,stagger:.4,order:`random`,ease:`inOutCubic`,curlAmp:.35,curlScale:1.2,curlSpeed:1,burst:0,swirl:0,zPush:0},intro:{mode:`word`,assemble:1.6,flight:1.6,spread:1,loose:.06,font:`system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif`,weight:800,tracking:0,size:.8,order:`random`,front:.3},life:{move:0,rest:0,restless:.2,speed:.35,settle:2.5},photo:{enabled:!1,delay:.2,duration:1.8,blur:0,depthSoft:1.5,depthGrow:0,limit:4,grain:.3,lens:.3,lensSoftness:.6,trail:2,rough:.7,dust:.3},camera:{fov:30,zoom:1,centerX:.5,centerY:.5,limit:15,parallax:1,follow:.05,fit:`contain`,focus:.6,aperture:.4},interaction:{repelRadius:.22,repelForce:.06,repelDepth:0,glow:0},recede:{zoom:1,blur:.8,parallax:1,limit:4}};function ol(e,t){let n=structuredClone(e);for(let e of Object.keys(t))e in n&&t[e]&&typeof t[e]==`object`&&Object.assign(n[e],t[e]);return n}function sl(e,t,n,r=512){let i=e instanceof HTMLImageElement?e.naturalWidth:e.width,a=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=Math.min(1,r/Math.max(i,a)),s=t??Math.max(1,Math.round(i*o)),c=n??Math.max(1,Math.round(a*o)),l=document.createElement(`canvas`);l.width=s,l.height=c;let u=l.getContext(`2d`,{willReadFrequently:!0});u.drawImage(e,0,0,s,c);let d=u.getImageData(0,0,s,c).data,f=new Float32Array(s*c);for(let e=0;e<f.length;e++)f[e]=(.2126*d[e*4]+.7152*d[e*4+1]+.0722*d[e*4+2])/255;return{tone:f,width:s,height:c}}function cl(e,t,n,r,i,a=[0,0,1,1]){let{tone:o,width:s,height:c}=e,[l,u,d,f]=[a[0]*s,a[1]*c,a[2]*s,a[3]*c],p=new Float64Array(o.length),m=0;for(let e=0;e<o.length;e++){let t=e%s+.5,a=(e/s|0)+.5;if(t<l||t>d||a<u||a>f){p[e]=m;continue}let c=(r?1-o[e]:o[e])**+n;if(i&&i.amount>0){let t=i.map.tone[e];c*=(i.invert?1-t:t)**+i.amount}m+=c+1e-6,p[e]=m}let h=ll(24301),g=new Float32Array(t*2),_=new Float32Array(t),v=m/t,y=0;for(let e=0;e<t;e++){let t=(e+h())*v;for(;y<p.length-1&&p[y]<t;)y++;let n=y%s,r=y/s|0;g[e*2]=(n+h())/s,g[e*2+1]=1-(r+h())/c,_[e]=h()}return{uv:g,seed:_}}function ll(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ul=240,dl=.4;function fl(e){return`${e.weight} ${ul}px ${e.font}`}function pl(e,t,n,r,i){let a=e.trim();if(!a)return null;let o=document.createElement(`canvas`),s=o.getContext(`2d`,{willReadFrequently:!0}),c=()=>{s.font=fl(i),s.letterSpacing=`${i.tracking*ul}px`};c();let l=s.measureText(a),u=Math.ceil(l.actualBoundingBoxLeft+l.actualBoundingBoxRight)+8,d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent)+8;o.width=u,o.height=d,c(),s.fillStyle=`#fff`,s.fillText(a,4+l.actualBoundingBoxLeft,4+l.actualBoundingBoxAscent);let f=s.getImageData(0,0,u,d).data,p=new Uint32Array(u*d),m=0;for(let e=0;e<u*d;e++)f[e*4+3]>127&&(p[m++]=e);if(!m)return null;let h=Math.min(n*i.size/u,r*dl/d),g=ll(32327),_=new Float32Array(t*3);for(let e=0;e<t;e++){let t=p[g()*m|0],n=t%u+g(),r=(t/u|0)+g();_[e*3]=(n-u/2)*h,_[e*3+1]=(d/2-r)*h}return{pos:_,half:[u/2*h,d/2*h]}}var ml={"mono-dark":0,"mono-light":1,source:2,duotone:3},hl=2,gl=1.08,_l=2,vl=.6,yl=.75,bl=30,xl=3,Sl=.6,Cl=24,wl=.001,Tl=8,El=1/400,Dl={random:0,"left-right":1,"right-left":2,"top-down":3,"bottom-up":4,"center-out":5,"edges-in":6,"near-first":7,"bright-first":8},Ol={random:0,"bottom-up":1,"top-down":2,"left-right":3,"right-left":4},kl={inOutCubic:0,inOutSine:1,outExpo:2,outBack:3,linear:4},Al=192,jl=1e3,Ml=[320,180],Nl=64,Pl=1e9,Fl=2.5,Il=4096,Ll=class extends EventTarget{preset=structuredClone(al);canvas;ready;photoLoaded=Promise.resolve();photoDone=()=>void 0;onFrame;handoffSoftness=0;el;renderer;scene=new Wn;camera=new ha;restCamera=new ha;geometry=new Rr;material;points;depthPoints;depthMaterial;photo;colorTex=null;depthTex=null;photoTex=null;photoDepthTex=null;photoImage=null;depthImage=null;photoKey=``;photoDepthKey=``;photoReady=!0;tones=null;tonesKey=``;colorImage=null;depthTones=null;sourceId=0;mobile;maxDpr;adjust;imageAspect=1;sampleKey=``;textKey=``;fontWait=``;hasWord=!1;loadTarget=1;assemble=0;morphTime=0;photoTime=0;playing=!1;flyClock=0;flyShown=0;flyLaunch=new Float32Array(65).fill(Pl);flyDone=!1;stir=0;fired=new Set;rows=1;dist=1;frameCenter=new q;pointer=new K;look=new K;bounds=null;buffer={width:1,height:1};asleep=!1;wake=!1;priming=0;mouse=new K;mouseSmooth=new K;pointerInside=!1;repel=0;brush=new Float32Array(1);brushBytes=new Uint8Array(1);brushTex;brushCols=1;brushRows=1;brushAt=null;brushPoint=new K;brushLive=!1;shape=null;shapeId=0;morphOverride=null;photoOverride=null;anchorTmp=[new q,new q,new q];lookAt=new q;resizeObserver;raf=0;lastTime=0;maxFps=0;recede=0;handoff=0;split={x:2,soft:0,rough:0,axis:`x`};shift=new K;viewZoom=1;roll=0;cursorHold=-1;viewKey=``;lowRes=!1;frameSig=[];grainFrame=-1;needsRender=!0;loaded=!1;shown=!1;destroyed=!1;constructor(e,t={}){super(),this.el=e,this.mobile=t.mobile??matchMedia(`(pointer: coarse)`).matches,this.maxDpr=t.maxDpr??_l,this.maxFps=t.maxFps??0,t.loading&&(this.loadTarget=0),this.renderer=new Qc({antialias:!1,powerPreference:`high-performance`}),this.canvas=this.renderer.domElement,this.canvas.style.cssText=`display:block;width:100%;height:100%;visibility:hidden`,e.appendChild(this.canvas),this.material=new zi({vertexShader:$c+`
`+el+`
`+tl,fragmentShader:nl,transparent:!0,depthWrite:!1,uniforms:{uColorMap:{value:null},uDepthMap:{value:null},uPlaneSize:{value:new K(hl,hl)},uTime:{value:0},uAssemble:{value:0},uFly:{value:0},uFlyClock:{value:0},uFlyShown:{value:0},uFlyLaunch:{value:this.flyLaunch},uFlyTime:{value:1},uFlySpread:{value:1},uFlyEye:{value:new q},uFlyCap:{value:1},uFlyLoose:{value:0},uLife:{value:0},uLifeMove:{value:0},uLifeRest:{value:0},uLifeRestless:{value:0},uLifeSpeed:{value:0},uAssembleOrder:{value:0},uAssembleFront:{value:0},uProgress:{value:0},uStagger:{value:0},uCurlAmp:{value:0},uNoiseScale:{value:1},uCurlSpeed:{value:1},uBurst:{value:0},uSwirl:{value:0},uZPush:{value:0},uOrder:{value:0},uEase:{value:0},uTextHalf:{value:new K(1,1)},uTextOffset:{value:new q},uMouse:{value:new K},uAspect:{value:1},uResolution:{value:new K(1,1)},uRepelRadius:{value:0},uRepelForce:{value:0},uRepelDepth:{value:0},uDepthScale:{value:0},uDepthCurve:{value:1},uDepthFade:{value:0},uEdgeCutoff:{value:1},uEdgeStep:{value:new K(El,El)},uDropout:{value:0},uJitter:{value:0},uScatter:{value:0},uSpread:{value:0},uSize:{value:1},uSizeRandom:{value:0},uCellPx:{value:1},uRefDist:{value:1},uSizeAttenuation:{value:1},uFocus:{value:.5},uAperture:{value:0},uBrightness:{value:1},uColorMode:{value:1},uDuoA:{value:new Y},uDuoB:{value:new Y},uInk:{value:new Y(1,1,1)},uPhotoMap:{value:null},uPhotoDepthMap:{value:null},uPhotoSize:{value:new K(1,1)},uPhoto:{value:0},uBlur:{value:0},uBleed:{value:0},uGrain:{value:0},uGrainScale:{value:1},uBrush:{value:null},uBrushAmount:{value:0},uBrushRough:{value:0},uGlow:{value:0},uShape:{value:0},uShapeScale:{value:1},uShapeZ:{value:new K(0,1)},uShapeDot:{value:1},uShapeFar:{value:1},uShapeSizeRandom:{value:0},uSplit:{value:jl},uSplitSoft:{value:0},uSplitRough:{value:0},uSplitAxis:{value:new K(1,0)},uDust:{value:0}}}),this.brushTex=new di(this.brushBytes,1,1,ie,w),this.brushTex.magFilter=this.brushTex.minFilter=x,this.brushTex.unpackAlignment=1,this.material.uniforms.uBrush.value=this.brushTex,this.points=new xi(this.geometry,this.material),this.points.frustumCulled=!1,this.points.visible=!1,this.scene.add(this.points),this.depthMaterial=new zi({vertexShader:this.material.vertexShader,fragmentShader:nl,uniforms:this.material.uniforms,defines:{DEPTH_PASS:``},colorWrite:!1}),this.depthPoints=new xi(this.geometry,this.depthMaterial),this.depthPoints.frustumCulled=!1,this.depthPoints.visible=!1,this.scene.add(this.depthPoints),this.photo=new ci(new Ai(1,1,...Ml),new zi({vertexShader:rl,fragmentShader:$c+`
`+el+`
`+il,uniforms:this.material.uniforms,transparent:!0,depthTest:!1,depthWrite:!1})),this.photo.frustumCulled=!1,this.photo.renderOrder=-1,this.photo.visible=!1,this.scene.add(this.photo),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),window.addEventListener(`pointermove`,this.onPointerMove),window.addEventListener(`pointerdown`,this.onPointerMove),window.addEventListener(`pointerout`,this.onPointerOut);for(let e of[`pointerup`,`pointercancel`])window.addEventListener(e,this.onPointerUp);window.addEventListener(`scroll`,this.onScroll,{capture:!0,passive:!0}),typeof t.preset==`object`&&(this.preset=ol(this.preset,t.preset)),this.adjust=t.adjust??null,this.adjust&&(this.preset=ol(this.preset,this.adjust)),t.intro===!1&&this.finishIntro(),this.resize(),this.applyPreset(),this.ready=typeof t.preset==`string`?this.loadScene(t.preset):t.source?this.setSource(t.source):Promise.resolve(),t.loop!==!1&&(this.raf=requestAnimationFrame(this.tick))}get pointCount(){return this.geometry.drawRange.count===1/0?0:this.geometry.drawRange.count}setPreset(e){this.preset=ol(this.preset,e),this.applyPreset()}setLoadProgress(e){this.loadTarget=G.clamp(e,this.loadTarget,1)}play(){this.playing=!0}setHandoff(e){this.handoff=G.clamp(e,0,1)}setRecede(e){this.recede=G.clamp(e,0,1);let t=this.recede>vl;t!==this.lowRes&&(this.lowRes=t,this.resize())}setSplit(e,t=0,n=0,r=`x`){this.split.x=e,this.split.soft=Math.max(0,t),this.split.rough=Math.max(0,n),this.split.axis=r}setShift(e,t=0){this.shift.set(e,t)}setZoom(e){this.viewZoom=Math.max(.05,e)}setRoll(e){this.roll=e}setBleed(e){this.material.uniforms.uBleed.value=Math.max(0,e)}imageToScreen(e,t){let{x:n,y:r}=this.material.uniforms.uPlaneSize.value,i=this.anchorTmp[1].set((e-.5)*n,(.5-t)*r,0).project(this.restCamera);return{x:(i.x+1)/2*this.el.clientWidth,y:(1-i.y)/2*this.el.clientHeight}}setShapePoints(e,t=e?e.length/3:0,n={}){this.shape=e?{points:e,count:Math.min(t,e.length/3),dot:n.dot??.004,far:n.far??1,sizeRandom:n.sizeRandom??0,shade:n.shade??null,id:++this.shapeId}:null,this.updateText(),this.updateShapeDot()}get pointSize(){return this.preset.particles.size*this.material.uniforms.uCellPx.value/this.buffer.height}setAwake(e){if(e){this.wake=this.asleep;return}this.wake=!1,!this.asleep&&(this.asleep=!0,this.renderer.setSize(1,1,!1),this.renderer.clear())}matchLook(e){this.look.copy(e.look),this.pointer.copy(e.pointer)}setMorph(e){this.morphOverride=e===null?null:G.clamp(e,0,1),this.updateProgress()}setPhotoShown(e){this.photoOverride=e===null?null:G.clamp(e,0,1)}finishIntro(){this.loadTarget=1,this.assemble=1,this.morphTime=1/0,this.photoTime=1/0,this.playing=!1,this.flyShown=1,this.flyLaunch.fill(0),this.flyDone=!0,this.material.uniforms.uFly.value=0,this.updateProgress()}replay(){this.assemble=0,this.morphTime=0,this.photoTime=0,this.playing=!0,this.flyClock=this.flyShown=0,this.flyLaunch.fill(Pl),this.flyDone=!1,this.material.uniforms.uFly.value=+(this.preset.intro.mode===`fly`),this.cursorHold=-1,this.fired.clear(),this.updateProgress()}async setSource(e){let t=e.photo?Bl(e.photo):null;t?.catch(()=>void 0),this.photoDone();let n=()=>void 0;this.photoLoaded=new Promise(e=>n=e),this.photoDone=n,t||n();let[r,i]=await Promise.all([zl(e.color,!0),zl(e.depth,!1)]);if(await this.loadWordFont(),this.destroyed)return r.dispose(),i.dispose(),n();this.colorTex?.dispose(),this.depthTex?.dispose(),this.colorTex=r,this.depthTex=i;let a=r.image;this.imageAspect=a.width/a.height,this.colorImage=a,this.sourceId++,this.photoImage=a,this.photoReady=!t,this.depthImage=i.image,this.photoKey=this.photoDepthKey=``;let o=this.material.uniforms;if(o.uColorMap.value=r,o.uDepthMap.value=i,this.updateFrame(),this.rebuildGeometry(),this.updatePhotoTexture(),this.layoutCamera(),await this.prepareGpu(),this.destroyed)return n();this.loaded=!0,this.priming=Tl,t&&this.takePhoto(t,this.sourceId,n)}async takePhoto(e,t,n){let r=null;try{r=await e,r instanceof HTMLImageElement&&await Promise.race([r.decode().catch(()=>void 0),new Promise(e=>setTimeout(e,1500))])}catch{r=null}if(this.destroyed||t!==this.sourceId)return n();r&&(this.photoImage=r,this.updatePhotoTexture(),this.photoTex&&this.renderer.initTexture(this.photoTex)),this.photoReady=!0,this.needsRender=!0,n()}async prepareGpu(){for(let e of[this.colorTex,this.depthTex,this.photoTex,this.photoDepthTex])e&&this.renderer.initTexture(e);await this.renderer.compileAsync(this.scene,this.camera)}async loadScene(e){let t=new URL(e,location.href),n=await fetch(t);if(!n.ok)throw Error(`LidarScene: ${t} → HTTP ${n.status}`);let r=await n.json();if(this.destroyed)return;this.setPreset(this.adjust?ol(ol(this.preset,r),this.adjust):r);let i=e=>new URL(e,t).href;await this.setSource({color:i(`color.webp`),depth:i(`depth.webp`),photo:this.preset.photo.enabled?i(`photo.webp`):void 0})}destroy(){this.destroyed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),window.removeEventListener(`pointermove`,this.onPointerMove),window.removeEventListener(`pointerdown`,this.onPointerMove),window.removeEventListener(`pointerout`,this.onPointerOut);for(let e of[`pointerup`,`pointercancel`])window.removeEventListener(e,this.onPointerUp);window.removeEventListener(`scroll`,this.onScroll,{capture:!0}),this.geometry.dispose(),this.material.dispose(),this.depthMaterial.dispose(),this.photo.geometry.dispose(),this.photo.material.dispose(),this.colorTex?.dispose(),this.depthTex?.dispose(),this.photoTex?.dispose(),this.photoDepthTex?.dispose(),this.brushTex.dispose(),this.renderer.dispose(),this.canvas.remove()}applyPreset(){this.needsRender=!0;let{particles:e,depth:t,look:n,morph:r,photo:i,camera:a,interaction:o}=this.preset,s=this.material.uniforms;s.uSize.value=e.size,s.uSizeRandom.value=e.sizeRandom,s.uSizeAttenuation.value=+!!e.sizeAttenuation,s.uDepthScale.value=t.scale,s.uDepthCurve.value=t.curve,s.uDepthFade.value=t.fade,s.uEdgeCutoff.value=t.edgeCutoff,s.uColorMode.value=ml[n.colorMode],s.uBrightness.value=n.brightness,s.uDropout.value=n.dropout,s.uJitter.value=n.jitter,s.uScatter.value=n.scatter,s.uSpread.value=n.spread,s.uDuoA.value.set(n.duoA),s.uDuoB.value.set(n.duoB),s.uInk.value.setStyle(n.ink||(n.colorMode===`mono-dark`?`#030303`:`#ffffff`),Ye),s.uFocus.value=a.focus,s.uAperture.value=a.aperture,s.uStagger.value=Math.min(r.stagger,.95),s.uCurlAmp.value=r.curlAmp,s.uNoiseScale.value=r.curlScale,s.uCurlSpeed.value=r.curlSpeed,s.uBurst.value=r.burst,s.uSwirl.value=r.swirl,s.uZPush.value=r.zPush,s.uOrder.value=Dl[r.order]??0,s.uEase.value=kl[r.ease]??0,s.uRepelRadius.value=o.repelRadius,s.uRepelDepth.value=G.clamp(o.repelDepth,0,1),s.uGrain.value=i.grain,s.uBrushRough.value=G.clamp(i.rough,0,1),s.uGlow.value=o.glow,s.uAssembleOrder.value=Ol[this.preset.intro.order]??0,s.uAssembleFront.value=G.clamp(this.preset.intro.front,0,1),s.uFly.value=+(this.preset.intro.mode===`fly`&&!this.flyDone),s.uFlyTime.value=Math.max(this.preset.intro.flight,.05),s.uFlySpread.value=Math.max(this.preset.intro.spread,0),s.uFlyLoose.value=Math.max(this.preset.intro.loose,0);let{life:c}=this.preset;s.uLifeMove.value=Math.max(c.move,0),s.uLifeRest.value=Math.max(c.rest,0),s.uLifeRestless.value=G.clamp(c.restless,0,1),s.uLifeSpeed.value=Math.max(c.speed,0),this.material.blending=n.blending===`additive`?2:1,this.renderer.setClearColor(n.background),this.updateFrame(),this.rebuildGeometry(),this.updatePhotoTexture(),this.layoutCamera()}framing(){let{zoom:e,centerX:t,centerY:n}=this.preset.camera,r=Math.max(1,e),i=.5/r;return{zoom:r,cx:G.clamp(t,i,1-i),cy:G.clamp(n,i,1-i)}}updateFrame(){let{zoom:e,cx:t,cy:n}=this.framing(),r=hl*this.imageAspect*e,i=hl*e,a=this.material.uniforms;a.uPlaneSize.value.set(r,i),a.uEdgeStep.value.set(El/(this.imageAspect*e),El/e),this.frameCenter.set((t-.5)*r,(.5-n)*i,0),a.uTextOffset.value.copy(this.frameCenter)}rebuildGeometry(){if(!this.colorImage)return;let{particles:e,look:t,depth:n}=this.preset,r=this.mobile?e.countMobile:e.count,i=t.colorMode===`mono-dark`,a=n.scale<0,{zoom:o,cx:s,cy:c}=this.framing(),l=this.updateTones(o),u=.5*gl/o,d=e=>this.preset.camera.fit===`cover`?Math.min(1,Math.ceil(Math.max(e,.2)*20)/20):1,f=u*d(this.camera.aspect/this.imageAspect),p=u*d(this.imageAspect/this.camera.aspect),m=[Math.max(0,s-f),Math.max(0,c-p),Math.min(1,s+f),Math.min(1,c+p)],h=`${this.sourceId}:${r}:${e.density}:${i}:${e.depthDensity}:${a}:${m}`;if(h!==this.sampleKey){this.sampleKey=h;let t=this.depthTones?{map:this.depthTones,amount:e.depthDensity,invert:a}:void 0,{uv:n,seed:s}=cl(l,r,e.density,i,t,m);this.geometry.dispose(),this.geometry=new Rr,this.geometry.setAttribute(`aUV`,new Cr(n,2)),this.geometry.setAttribute(`aSeed`,new Cr(s,1)),this.geometry.setDrawRange(0,r),this.points.geometry=this.geometry,this.depthPoints.geometry=this.geometry;let c=(m[2]-m[0])*(m[3]-m[1])*this.imageAspect*o*o;this.rows=Math.max(1,Math.sqrt(r/c))}this.updateText()}updateTones(e){let t=`${this.sourceId}:${e}`;return(t!==this.tonesKey||!this.tones)&&(this.tonesKey=t,this.tones=sl(this.colorImage,void 0,void 0,Math.round(512*e)),this.depthTones=this.depthImage?sl(this.depthImage,this.tones.width,this.tones.height):null),this.tones}updateText(){let e=this.pointCount,{morph:t,intro:n}=this.preset,r=this.shape,i=n.mode===`fly`?``:t.word,a=r?`${this.sampleKey}:shape${r.id}`:`${this.sampleKey}:${i}:${fl(n)}:${n.tracking}:${n.size}:${this.frameCenter.toArray()}`;if(a===this.textKey)return;this.textKey=a;let o=this.material.uniforms;o.uShape.value=+!!r,!r&&i.trim()&&this.fontWait!==a&&!document.fonts.check(fl(n),i)&&(this.fontWait=a,this.loadWordFont().then(()=>{this.textKey===a&&(this.textKey=``,this.updateText())}));let s=r?this.shapeTargets(e):i.trim()?pl(i,e,hl*this.imageAspect,hl,n):null,c=s?.pos??null;this.hasWord=c!==null,s&&this.material.uniforms.uTextHalf.value.set(s.half[0],s.half[1]);let l=this.geometry.getAttribute(`aTextPos`);c&&l?.count===e?(l.array.set(c),l.needsUpdate=!0):(c||!l)&&this.geometry.setAttribute(`aTextPos`,new Cr(c??new Float32Array(e*3),3)),this.updateProgress()}shapeTargets(e){let t=this.shape,n=t.points,r=Math.min(t.count,e,n.length/3)|0;if(!r)return null;let i=new Float32Array(e*3),a=new Uint8Array(e),o=1/0,s=-1/0,c=0,l=0;for(let u=0;u<e;u++){let d=Math.floor(u*r/e),f=Math.floor((u+1)*r/e)>d;a[u]=f?Math.max(1,Math.round((t.shade?G.clamp(t.shade[d],0,1):1)*255)):0,i.set(n.subarray(d*3,d*3+3),u*3),f&&(o=Math.min(o,n[d*3+2]),s=Math.max(s,n[d*3+2]),c=Math.max(c,Math.abs(n[d*3])),l=Math.max(l,Math.abs(n[d*3+1])))}this.geometry.setAttribute(`aShapeKeep`,new Cr(a,1,!0));let u=this.material.uniforms;return u.uShapeZ.value.set(o,Math.max(s,o+.001)),u.uShapeFar.value=G.clamp(t.far,0,1),u.uShapeSizeRandom.value=G.clamp(t.sizeRandom,0,1),{pos:i,half:[c,l]}}updateShapeDot(){this.material.uniforms.uShapeDot.value=(this.shape?.dot??0)*this.buffer.height}async loadWordFont(){let{morph:e,intro:t}=this.preset;e.word.trim()&&await document.fonts.load(fl(t),e.word).catch(()=>void 0)}updatePhotoTexture(){let e=this.photoImage,t=this.depthImage;if(!e||!t)return;let{blur:n,depthSoft:r,depthGrow:i}=this.preset.photo,{zoom:a}=this.framing(),o=this.preset.depth.scale<0,s=`${this.sourceId}:${n}:${a}:${e===this.colorImage?`colour`:`photo`}`;if(s!==this.photoKey){this.photoKey=s;let t=new tn(Vl(e,n/a));Rl(t,!0,!0);let r=t.image;this.material.uniforms.uPhotoSize.value.set(r.width,r.height),this.photoTex?.dispose(),this.photoTex=t,this.material.uniforms.uPhotoMap.value=t}let c=`${this.sourceId}:${r}:${i}:${o}:${a}`;if(c!==this.photoDepthKey){this.photoDepthKey=c;let e=new tn(Vl(t,r/a,(i??0)/a,o));Rl(e,!1),this.photoDepthTex?.dispose(),this.photoDepthTex=e,this.material.uniforms.uPhotoDepthMap.value=e}}updateProgress(){let{hold:e,duration:t}=this.preset.morph,n=(this.morphTime-e)/Math.max(t,.001);this.material.uniforms.uProgress.value=this.morphOverride??(this.hasWord?G.clamp(n,0,1):1)}resize(){let e=Math.max(1,this.el.clientWidth),t=Math.max(1,this.el.clientHeight);this.bounds=this.el.getBoundingClientRect();let n=Math.min(window.devicePixelRatio,this.lowRes?yl:this.maxDpr);this.renderer.setPixelRatio(n),this.material.uniforms.uGrainScale.value=n/Math.min(window.devicePixelRatio,_l),this.needsRender=!0,this.buffer={width:Math.max(1,Math.floor(e*n)),height:Math.max(1,Math.floor(t*n))},this.asleep||this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.material.uniforms.uAspect.value=e/t,this.material.uniforms.uResolution.value.set(this.buffer.width,this.buffer.height),this.resizeBrush(e/t),this.updateShapeDot(),this.rebuildGeometry(),this.layoutCamera()}resizeBrush(e){let t=Al,n=Math.max(1,Math.round(t/e));(t!==this.brushCols||n!==this.brushRows)&&(this.brushCols=t,this.brushRows=n,this.brush=new Float32Array(t*n),this.brushBytes=new Uint8Array(t*n),this.brushTex.dispose(),this.brushTex=new di(this.brushBytes,t,n,1028,1009),this.brushTex.magFilter=this.brushTex.minFilter=1006,this.brushTex.unpackAlignment=1,this.brushTex.needsUpdate=!0,this.material.uniforms.uBrush.value=this.brushTex,this.brushLive=!1,this.brushAt=null)}paintBrush(e){let{lens:t,lensSoftness:n,trail:r}=this.preset.photo,i=this.brush,a=this.brushCols,o=this.brushRows,s=this.pointerInside&&t>0&&this.loaded?this.brushPoint.set((this.pointer.x*.5+.5)*a,(this.pointer.y*.5+.5)*o):null,c=!!s&&!!this.brushAt&&s.distanceToSquared(this.brushAt)>.0025;if(!c&&s&&(this.brushAt??=s.clone()),s||(this.brushAt=null),!this.brushLive&&!c)return;let l=!1;if(e>0){let t=e/Math.max(r,.05);for(let e=0;e<i.length;e++)i[e]<=0||(i[e]=Math.max(0,i[e]-t),i[e]>0&&(l=!0))}if(c&&s&&this.brushAt){let e=this.brushAt,r=Math.max(1,t*o/2),c=Math.max(r*G.clamp(n,.05,1),1),u=Math.max(0,Math.floor(Math.min(e.x,s.x)-r)),d=Math.min(a-1,Math.ceil(Math.max(e.x,s.x)+r)),f=Math.max(0,Math.floor(Math.min(e.y,s.y)-r)),p=Math.min(o-1,Math.ceil(Math.max(e.y,s.y)+r)),m=s.x-e.x,h=s.y-e.y,g=m*m+h*h;for(let t=f;t<=p;t++)for(let n=u;n<=d;n++){let o=n+.5-e.x,s=t+.5-e.y,u=g>0?G.clamp((o*m+s*h)/g,0,1):0,d=Math.hypot(o-m*u,s-h*u),f=G.clamp((r-d)/c,0,1)*1.35,p=t*a+n;f>i[p]&&(i[p]=f),f>0&&(l=!0)}}c&&s&&this.brushAt.copy(s),this.brushLive=l;let u=this.brushBytes;for(let e=0;e<i.length;e++)u[e]=Math.min(i[e],1)*255;this.brushTex.needsUpdate=!0,this.needsRender=!0}layoutCamera(){let{fov:e,fit:t}=this.preset.camera,n=this.camera,r=Math.tan(G.degToRad(e)/2),i=hl/2,a=i/r,o=i*this.imageAspect/(r*n.aspect);this.dist=t===`cover`?Math.min(a,o)*.94:Math.max(a,o)*1.05,n.fov=e,n.updateProjectionMatrix();let s=this.restCamera;s.fov=e,s.aspect=n.aspect,s.near=this.dist*.05,s.far=this.dist*10,s.updateProjectionMatrix(),s.position.copy(this.frameCenter).setZ(this.dist),s.lookAt(this.frameCenter),s.updateMatrixWorld();let c=this.buffer.height,l=this.material.uniforms;l.uCellPx.value=c*i/(this.dist*r)/this.rows,l.uRefDist.value=this.dist,l.uFlyEye.value.copy(s.position),l.uFlyCap.value=c*.02,l.uShapeScale.value=this.dist*r/i,this.updateCamera()}updateCamera(){let{camera:e,photo:t,recede:n}=this.preset,r=this.recede,i=this.handoff,a=e.parallax*G.lerp(1,n.parallax,r)*(1-i)*Math.max(this.cursorHold,0),o=G.lerp(G.lerp(e.limit,t.limit,this.material.uniforms.uPhoto.value),n.limit,r),s=G.degToRad(o),c=G.clamp(this.look.x*a*s,-s,s),l=G.clamp(this.look.y*a*s,-s,s),{zoom:u}=this.framing(),d=G.clamp(n.zoom,1,u),f=G.lerp(1,u/d,r),p=G.lerp(1,u,i),m=this.dist*Math.max(f,p),h=p>f?i:u>1?(u-d)/(u-1)*r:0,g=this.lookAt.copy(this.frameCenter).multiplyScalar(1-h);this.camera.position.set(g.x+Math.sin(c)*Math.cos(l)*m,g.y+Math.sin(l)*m,Math.cos(c)*Math.cos(l)*m),this.camera.lookAt(g),this.roll&&this.camera.rotateZ(this.roll);let _=this.el.clientWidth,v=this.el.clientHeight,{x:y,y:b}=this.shift,x=this.viewZoom,S=y||b||x!==1?`${y}:${b}:${x}:${_}:${v}`:``;S!==this.viewKey&&(this.viewKey=S,S?this.camera.setViewOffset(_,v,(.5+y)*_-_/x/2,(.5-b)*v-v/x/2,_/x,v/x):this.camera.clearViewOffset()),this.camera.near!==m*.05&&(this.camera.near=m*.05,this.camera.far=m*10,this.camera.updateProjectionMatrix()),this.camera.updateMatrixWorld()}anchor(e,t,n){let{scale:r,curve:i}=this.preset.depth,a=(G.clamp(n,0,1)**+i-.5)*r,o=this.el.clientWidth,s=this.el.clientHeight,c=this.restCamera,[l,u,d]=this.anchorTmp;l.set(e/o*2-1,1-t/s*2,.5).unproject(c).sub(c.position).normalize(),u.copy(c.position).addScaledVector(l,(a-c.position.z)/l.z);let f=-d.copy(u).applyMatrix4(c.matrixWorldInverse).z,p=-d.copy(u).applyMatrix4(this.camera.matrixWorldInverse).z;return u.project(this.camera),{x:(u.x+1)/2*o,y:(1-u.y)/2*s,scale:f/Math.max(p,1e-6)}}onPointerMove=e=>{if(e.type===`pointerdown`&&e.pointerType!==`touch`)return;let t=this.bounds??=this.el.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,r=1-(e.clientY-t.top)/t.height*2;this.pointer.set(G.clamp(n,-1,1),G.clamp(r,-1,1)),this.mouse.set(n*(t.width/t.height),r),this.pointerInside=Math.abs(n)<=1&&Math.abs(r)<=1};onPointerUp=e=>{e.pointerType===`touch`&&(this.pointerInside=!1,this.pointer.set(0,0))};onPointerOut=e=>{e.relatedTarget||(this.pointerInside=!1)};onScroll=()=>{this.bounds=null};launch(e){let t=this.flyShown,n=this.assemble**+Fl,r=this.flyClock;this.flyClock+=e,this.flyShown=n;for(let i=Math.ceil(t*Nl);i<=Math.floor(n*Nl);i++)this.flyLaunch[i]<Pl||(this.flyLaunch[i]=r+e*(n>t?G.clamp((i/Nl-t)/(n-t),0,1):1));let i=this.material.uniforms;i.uFlyClock.value=this.flyClock,i.uFlyShown.value=n}fire(e){this.fired.has(e)||(this.fired.add(e),this.dispatchEvent(new Event(e)))}advance(e){let{intro:t,morph:n,photo:r}=this.preset,i=this.loaded;i&&this.assemble<this.loadTarget&&(this.assemble=t.assemble>0?Math.min(this.loadTarget,this.assemble+e/t.assemble):this.loadTarget);let a=i&&this.assemble>=1;a&&this.fire(`assembled`);let o,s,c;t.mode===`fly`?(i&&!this.flyDone&&this.launch(e),o=i&&this.flyShown>0,s=a&&this.flyClock>=this.flyLaunch[Nl]+t.flight,s&&!this.flyDone&&(this.flyDone=!0,this.material.uniforms.uFly.value=0),this.updateProgress(),a&&r.enabled&&this.photoReady&&(this.photoTime+=e),c=t.flight+r.delay):(this.playing&&a&&(this.morphTime+=e,this.morphTime>=n.hold+n.duration&&(this.playing=!1)),this.updateProgress(),o=a&&(!this.hasWord||this.morphTime>=n.hold),s=a&&(!this.hasWord||this.morphTime>=n.hold+n.duration),o&&r.enabled&&this.photoReady&&(this.photoTime+=e),c=(this.hasWord?n.duration:0)+r.delay),o&&this.fire(`flight`),s&&this.fire(`landed`);let l=this.material.uniforms.uProgress.value,u=t.mode===`fly`&&i&&!this.flyDone||l>0&&l<1;this.stir=u?1:this.stir*Math.exp(-e/Math.max(this.preset.life.settle,.05)),this.stir<.001&&(this.stir=0),this.material.uniforms.uLife.value=this.stir;let d=r.enabled?G.clamp((this.photoTime-c)/Math.max(r.duration,.001),0,1):0;d>0&&this.fire(`developing`),d>=1&&this.fire(`revealed`);let f=r.enabled?this.photoOverride??d:0;this.photo.visible=i&&f>0;let p=this.material.uniforms;p.uAssemble.value=i?this.assemble:0,p.uPhoto.value=f}tick=e=>{this.raf=requestAnimationFrame(this.tick),this.frame(e)};frame(e){if(this.wake&&(this.wake=this.asleep=!1,this.resize(),this.priming=Tl),this.asleep)return;let t=this.priming>0&&this.loaded;t&&(this.priming--,this.needsRender=!0);let n=this.lowRes?bl:this.maxFps;if(n>0&&this.lastTime&&!this.needsRender&&e-this.lastTime<1e3/n-xl)return;let r=this.lastTime?Math.min((e-this.lastTime)/1e3,.1):0;this.lastTime=e;let i=this.material.uniforms;i.uTime.value=e/1e3,this.advance(r);let a=this.material.uniforms.uFly.value>.5;this.loaded?this.cursorHold<0?this.cursorHold=+!a:this.cursorHold+=(+!a-this.cursorHold)*(1-Math.exp(-r/Sl)):this.cursorHold=-1;let o=G.clamp(this.preset.camera.follow,.001,1);this.look.lerp(this.pointer,1-(1-o)**(r*60)),this.look.distanceToSquared(this.pointer)<wl*wl&&this.look.copy(this.pointer),this.repel+=(+!!this.pointerInside-this.repel)*(1-.92**(r*60)),this.repel<.01?this.mouseSmooth.copy(this.mouse):this.mouseSmooth.lerp(this.mouse,1-.65**(r*60)),i.uMouse.value.copy(this.mouseSmooth);let s=(1-this.recede)*(1-this.handoff);i.uDepthScale.value=this.preset.depth.scale*(1-this.handoff),i.uGrain.value=this.preset.photo.grain*(1-this.handoff),i.uRepelForce.value=this.preset.interaction.repelForce*this.repel*s*(1-i.uPhoto.value)*this.cursorHold,this.paintBrush(r),i.uBrushAmount.value=this.brushLive&&s>.001?s:0,i.uDust.value=this.preset.photo.dust*s,i.uBlur.value=Math.max(this.preset.recede.blur/100/this.framing().zoom*this.recede,this.handoffSoftness*this.handoff);let{x:c,soft:l,rough:u,axis:d}=this.split,f=d===`y`,p=f?1:i.uAspect.value,m=c<1+l+u;i.uSplitAxis.value.set(+!f,f?-1:0),i.uSplit.value=m?(2*c-1)*p:jl,i.uSplitSoft.value=m?Math.max(2*l,2/Math.max(1,f?this.el.clientHeight:this.el.clientWidth))*p:0,i.uSplitRough.value=m?2*u*p:0;let h=i.uDust.value>0&&i.uScatter.value>0,g=i.uPhoto.value>=1&&i.uBrushAmount.value===0&&!h&&!m;t&&(this.photo.visible=this.loaded),this.points.visible=this.loaded&&(!g||t),this.depthPoints.visible=this.points.visible&&this.preset.depth.occlusion,this.updateCamera(),this.onFrame?.();let _=i.uLifeRest.value>0&&i.uLifeRestless.value>0,v=i.uPhoto.value>0&&i.uGrain.value*i.uGrainScale.value>0||this.points.visible&&(i.uScatter.value>0||_)?Math.floor(e/1e3*Cl):this.grainFrame;(this.frameChanged()||this.needsRender||v!==this.grainFrame)&&(this.needsRender=!1,this.grainFrame=v,this.renderer.render(this.scene,this.camera)),!this.shown&&this.loaded&&(this.shown=!0,this.canvas.style.visibility=``)}frameChanged(){let e=this.frameSig,t=0,n=!1,r=r=>{(t>=e.length||Math.abs(e[t]-r)>1e-6)&&(n=!0),e[t++]=r};for(let e of this.camera.matrixWorld.elements)r(e);for(let e of this.camera.projectionMatrix.elements)r(e);for(let e in this.material.uniforms){if(e===`uTime`)continue;let t=this.material.uniforms[e].value;typeof t==`number`?r(t):typeof t==`boolean`?r(+t):t?.isTexture?r(t.id):t&&typeof t==`object`&&(`x`in t&&r(t.x),`y`in t&&r(t.y),`z`in t&&r(t.z),`r`in t&&r(t.r+t.g*3+t.b*7))}return r(this.geometry.id),r(+this.points.visible),r(+this.depthPoints.visible),r(+this.photo.visible),e.length=t,n}};function Rl(e,t,n=!1){e.colorSpace=t?Je:``,t||(e.format=1028),e.minFilter=n?C:x,e.magFilter=x,e.generateMipmaps=n,e.wrapS=g,e.wrapT=g,e.needsUpdate=!0}async function zl(e,t){let n=new tn(await Bl(e));return Rl(n,t),n}function Bl(e){return typeof e==`string`?new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`LidarScene: failed to load ${e}`)),r.src=e}):Promise.resolve(e)}function Vl(e,t,n=0,r=!1){let i=e instanceof HTMLImageElement?e.naturalWidth:e.width,a=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=Math.min(1,Il/Math.max(i,a));if(t<=0&&n<=0&&o===1)return e;let s=Math.round(i*o),c=Math.round(a*o),l=t/100*c,u=n/100*c;if(u>=.5){let t=document.createElement(`canvas`);t.width=s,t.height=c;let n=t.getContext(`2d`);n.drawImage(e,0,0,s,c),n.globalCompositeOperation=r?`darken`:`lighten`;for(let t=1;t<=u;t+=1){let r=Math.max(8,Math.ceil(2*Math.PI*t));for(let i=0;i<r;i++){let a=i/r*Math.PI*2;n.drawImage(e,Math.cos(a)*t,Math.sin(a)*t,s,c)}}e=t}let d=document.createElement(`canvas`);d.width=s,d.height=c;let f=d.getContext(`2d`);if(f.imageSmoothingQuality=`high`,l>0&&`filter`in f)f.drawImage(e,0,0,s,c),f.filter=`blur(${l}px)`,f.drawImage(e,0,0,s,c),f.filter=`none`;else if(l>0){let t=Math.max(1,l/1.5),n=document.createElement(`canvas`);n.width=Math.max(1,Math.round(s/t)),n.height=Math.max(1,Math.round(c/t));let r=n.getContext(`2d`);r.imageSmoothingQuality=`high`,r.drawImage(e,0,0,n.width,n.height),f.drawImage(n,0,0,s,c)}else f.drawImage(e,0,0,s,c);return d}function Q(e,t){let n=i.to({},{ease:`none`,...t,onUpdate:()=>e(n.ratio)});return n}function Hl(e,t){let n=()=>{e.style.removeProperty(`--fit`);let n=e.getBoundingClientRect().right,r=1;for(let e of t){let t=e.getBoundingClientRect();t.width>0&&t.left+t.width>n&&(r=Math.min(r,(n-t.left)/t.width))}r<1&&e.style.setProperty(`--fit`,(r*.98).toFixed(4))};return n(),document.fonts?.ready.then(n),addEventListener(`resize`,n),n}var Ul=matchMedia(`(orientation: portrait), (max-width: 767px)`),Wl=0;addEventListener(`resize`,()=>Wl=0);var $={get narrow(){return Ul.matches},get rem(){return Wl||=parseFloat(getComputedStyle(document.documentElement).fontSize)||innerWidth/192}};function Gl(e){Ul.addEventListener(`change`,()=>{Wl=0,e()})}var Kl={duration:2.2,turns:2,stagger:.08,ease:`power3.out`},ql=new WeakMap;function Jl(e){let t=ql.get(e);if(t)return t;let n=(e.textContent??``).trim();e.setAttribute(`aria-label`,n),e.textContent=``,t={wheels:[],marks:[]};let{turns:r}=Kl;for(let i of n){let n=document.createElement(`span`);n.className=`odometer__slot`,n.setAttribute(`aria-hidden`,`true`);let a=document.createElement(`span`);if(a.className=`odometer__size`,a.textContent=i,n.append(a),/\d/.test(i)){let e=(r+1)*10,a=document.createElement(`span`);a.className=`odometer__reel`;for(let t=0;t<e;t++){let e=document.createElement(`span`);e.textContent=String(t%10),a.append(e)}n.append(a),t.wheels.push({reel:a,stop:r*10+Number(i),lines:e})}else a.classList.add(`odometer__mark`),t.marks.push(a);e.append(n)}return ql.set(e,t),t}function Yl(e){for(let t of e)Jl(t)}var Xl=(e,t)=>-t/e.lines*100;function Zl(e){let{wheels:t,marks:n}=Jl(e),{duration:r,stagger:a,ease:o}=Kl,s=i.timeline();return s.call(()=>e.classList.add(`is-in`),[],0),s.fromTo(e,{opacity:0},{opacity:1,duration:.25,ease:`power1.out`,immediateRender:!1},0),t.forEach((e,n)=>{let i=t.length-1-n;s.fromTo(e.reel,{yPercent:0},{yPercent:Xl(e,e.stop),duration:r,ease:o,immediateRender:!1},i*a)}),n.length&&s.fromTo(n,{yPercent:100},{yPercent:0,duration:r*.5,ease:`power3.out`,immediateRender:!1},0),s}function Ql(e){let{wheels:t,marks:n}=Jl(e);e.classList.add(`is-in`),i.set(e,{opacity:1});for(let e of t)i.set(e.reel,{yPercent:Xl(e,e.stop)});n.length&&i.set(n,{yPercent:0})}function $l(e){let{wheels:t,marks:n}=Jl(e);e.classList.remove(`is-in`),i.set(e,{opacity:0});for(let e of t)i.set(e.reel,{yPercent:0});n.length&&i.set(n,{yPercent:100})}function eu(e,t=.4){return i.to(e,{opacity:0,duration:t,ease:`power1.in`})}var tu={ink:`accent`,brightness:1.79,size:.87,density:5,depthDensity:2.9,fade:.32},nu={name:`night`,bg:`#252525`,fg:`#ffffff`,accent:`#f1da75`},ru=[{name:`red`,bg:`#f04b2d`,fg:`#fff1dc`,accent:`#140f0d`,points:tu},{name:`terracotta`,bg:`#d9ccb4`,fg:`#1d1915`,accent:`#b5401e`}],iu=e=>{let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]},au=e=>{let[t,n,r]=iu(e);return(.2126*t+.7152*n+.0722*r)/255},ou=(e,t)=>{let n=e=>{let[t,n,r]=iu(e).map(e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4});return .2126*t+.7152*n+.0722*r},[r,i]=[n(e),n(t)].sort((e,t)=>t-e);return(r+.05)/(i+.05)},su={current:ru[0],get fg(){return iu(this.current.fg).join(`,`)},get bg(){return iu(this.current.bg).join(`,`)},get accent(){return iu(this.current.accent).join(`,`)},get light(){return au(this.current.bg)>.5},get look(){let{bg:e,fg:t,accent:n}=this.current,r=ou(n,e)>ou(t,e)?n:t;return au(r)<.5?{background:e,colorMode:`mono-dark`,ink:r,boost:1}:{background:e,colorMode:`mono-light`,ink:r,boost:Math.min(Math.max((ou(nu.fg,nu.bg)/ou(r,e))**1.3,1),12)}}},cu={brightness:.6,size:.9,density:2.5,depthDensity:4,fade:.6},lu=e=>iu(e).join(`,`),uu=new Set;function du(e){uu.add(e)}function fu(e){e.ready.then(()=>{let{look:t,particles:n,depth:r}=e.preset,i={brightness:t.brightness,size:n.size,density:n.density,depthDensity:n.depthDensity,fade:r.fade},a=()=>{let t=su.look,n={...t.colorMode===`mono-dark`?cu:{...i,brightness:i.brightness*t.boost},ink:`auto`,...su.current.points},r=n.ink===`fg`?su.current.fg:n.ink===`accent`?su.current.accent:t.ink;e.setPreset({look:{background:t.background,colorMode:au(r)<.5?`mono-dark`:`mono-light`,ink:r,brightness:n.brightness},particles:{size:n.size,density:n.density,depthDensity:n.depthDensity},depth:{fade:n.fade}})};a(),du(a)},()=>void 0)}function pu(t){let n=ru.find(e=>e.name===t);if(!n)return;su.current=n;let r=document.documentElement.style;r.setProperty(`--bg`,n.bg),r.setProperty(`--fg`,n.fg),r.setProperty(`--accent`,n.accent),r.setProperty(`--bg-rgb`,iu(n.bg).join(` `)),r.setProperty(`--fg-rgb`,iu(n.fg).join(` `)),r.setProperty(`--accent-rgb`,iu(n.accent).join(` `)),document.documentElement.dataset.palette=n.name,_u(),e.color=e.glowColor=n.accent,a();for(let e of uu)e(n)}var mu=`#0e0c0b`,hu=matchMedia(`(orientation: portrait), (max-width: 767px)`),gu=matchMedia(`(pointer: coarse)`).matches;function _u(){let e=document.documentElement,t=e.dataset.screen??`hero`,n=t===`hero`||t===`portfolio`||t===`about`&&hu.matches&&!e.classList.contains(`is-points`)||gu?mu:su.current.bg,r=document.querySelector(`meta[name="theme-color"]`);r&&r.getAttribute(`content`)!==n&&r.setAttribute(`content`,n)}function vu(){new MutationObserver(_u).observe(document.documentElement,{attributes:!0,attributeFilter:[`data-screen`,`class`]}),hu.addEventListener(`change`,_u),_u()}var yu=`terracotta`;function bu(){let e=document.documentElement.dataset.palette??`terracotta`;pu(ru.some(t=>t.name===e)?e:yu),vu()}var xu={split:780,shift:165,shiftY:34,edge:{soft:800,rough:300,restSoft:0,restRough:0},timing:{settle:1.4,sweepAt:0,sweep:1.4,textAt:1},narrow:{split:0,shift:0,shiftY:0,edge:{soft:260,rough:80,restSoft:0,restRough:0},sweep:.8,face:.488,zoom:1,photo:1.7684},strip:{eyes:{u:.485,v:.392},face:.31,eyesAt:.6,fill:.74,narrowFill:.95,roll:2.2,focus:1.7,sweep:1.3,back:.85,toFilm:.65}},Su=s.create(`stripFocus`,`0.45,0,0.1,1`);function Cu(){let e=$.narrow,t=e?xu.narrow:xu,n=e?390:1920,r=e?844:1080;return{split:t.split,shift:t.shift,shiftY:t.shiftY,edge:t.edge,frameW:n,frameH:r,axis:e?`y`:`x`,frameAlong:e?r:n}}var wu=s.create(`aboutSettle`,`0.35,0,0.3,1`),Tu=matchMedia(`(pointer: coarse)`).matches,Eu=1.5,Du={follow:30,glide:7,fling:.3,give:.35};function Ou(){let e=document.querySelector(`.about`),t=e?.querySelector(`[data-about-scene]`),a=e?.querySelector(`.about__scroll`);if(!e||!t||!a)return null;let s=Array.from(e.querySelectorAll(`.about__content :is([data-goo], [data-odometer])`)),c=e=>e.hasAttribute(`data-odometer`);Yl(s.filter(c));let u=e=>{for(let t=e.parentElement;t&&t!==a;t=t.parentElement)t.classList.add(`has-text`)},d=()=>e.querySelectorAll(`.has-text`).forEach(e=>e.classList.remove(`has-text`)),f=(e,t)=>{let n=i.timeline();return e.forEach((e,r)=>{n.call(()=>u(e),[],r*t),n.add(c(e)?Zl(e):o([e],0,1,{duration:1}),r*t)}),n},p=(e,t)=>{let n=i.timeline();return n.call(d,[],0),e.forEach((e,r)=>n.add(c(e)?eu(e,.3):o([e],1,0,{duration:.5}),r*t)),n},h=e=>c(e)?$l(e):l(e),g=e.querySelector(`.about__shade`),_=Array.from(e.querySelectorAll(`[data-about-fade]`)),v=e.querySelector(`.about__title`),y=v?Hl(v,Array.from(v.querySelectorAll(`.about__line`))):()=>{},b=new Set,x=!1,S=(e,t=0)=>{let n=e.getBoundingClientRect();return n.bottom>0&&n.top<innerHeight*(1-t)},C=()=>{b.clear();let e=[];for(let t of s)S(t)?e.push(t):(b.add(t),h(t));return e},w=()=>s.filter(e=>!b.has(e)&&S(e)),T=()=>{if(!x||!b.size)return;let e=($.narrow?z.goal:a.scrollTop)>=ge()-2,t=[...b].filter(t=>S(t,e?0:.18));if(t.length){for(let e of t)b.delete(e);f(t,.08)}};a.addEventListener(`scroll`,T,{passive:!0});let E=null,D=null,O=!1,k=null,A=e=>e/Cu().frameW,j=e=>e/Cu().frameAlong,M=e=>E?.setHandoff(e),N=e=>{let t=$.narrow?L():ne,n=L();re({cx:t.cx+(n.cx-t.cx)*e,cy:t.cy+(n.cy-t.cy)*e,w:t.w+(n.w-t.w)*e,roll:0})},ee=()=>{let{edge:e}=Cu();return j(Math.max(e.soft,e.restSoft)/2+Math.max(e.rough,e.restRough))+.002},P=e=>{let t=1+ee();return t+(($.narrow?-ee():A(Cu().split))-t)*e},F=e=>{let{edge:n,axis:r}=Cu(),i=Math.sin(Math.PI*e),a=P(e);E?.setSplit(a,j(n.restSoft+(n.soft-n.restSoft)*i),j(n.restRough+(n.rough-n.restRough)*i),r),t.style.setProperty(`--edge`,String(Math.min(Math.max(a,0),1))),$.narrow&&(g?.style.setProperty(`--points`,e.toFixed(3)),t.style.setProperty(`--points`,e.toFixed(3)),document.documentElement.classList.toggle(`is-points`,e>.3))},I=()=>$.narrow?Math.min(Math.max(z.y,0)/(innerHeight*xu.narrow.sweep),1):1,te=()=>{M(1),N(0),F(0),se()},ne={cx:.5,cy:.5,w:1,roll:0},re=e=>{E?.setZoom(1/e.w),E?.setShift(e.cx-.5,.5-e.cy),E?.setRoll(e.roll),t.style.setProperty(`--shift`,String(e.cx-.5)),t.style.setProperty(`--shift-y`,String(.5-e.cy))},L=()=>{let e=Cu();if(!$.narrow)return{cx:.5+A(e.shift),cy:.5-e.shiftY/e.frameH,w:1,roll:0};let n=xu.narrow,r=(t.clientWidth||innerWidth)/(t.clientHeight||innerHeight),i=Math.max(1,n.photo/r)/.94,a=Math.max(1,r/n.photo)/.94,o=1/Math.max(n.zoom,1),s=.5-a/2+.012;return{cx:.5+(n.face-.5)*i,cy:s+o/2,w:o,roll:0}},ie=e=>{let n=xu.strip,r=t.clientWidth||innerWidth,i=t.clientHeight||innerHeight,a=n.roll*Math.PI/180;if(!E)return{cx:.5,cy:.5,w:1,roll:a};let o=E.imageToScreen(n.eyes.u,n.eyes.v),[s,c,l,u]=[Math.cos(a),Math.sin(a),o.x-r/2,o.y-i/2],d={x:r/2+l*s-u*c,y:i/2+l*c+u*s},f=E.imageToScreen(n.eyes.u+n.face/2,n.eyes.v).x-E.imageToScreen(n.eyes.u-n.face/2,n.eyes.v).x,p=e.width*($.narrow?n.narrowFill:n.fill)/Math.max(f,1);return{cx:d.x/r-(e.left+e.width/2-r/2)/r/p,cy:d.y/i-(e.top+e.height*n.eyesAt-i/2)/i/p,w:1/p,roll:a}},ae=e=>({top:e.top,right:(t.clientWidth||innerWidth)-e.right,bottom:(t.clientHeight||innerHeight)-e.bottom,left:e.left}),oe=e=>{t.style.clipPath=`inset(${e.top.toFixed(1)}px ${e.right.toFixed(1)}px ${e.bottom.toFixed(1)}px ${e.left.toFixed(1)}px)`},se=()=>{t.style.clipPath=``},ce=e=>n=>{let{edge:r,axis:i}=Cu(),a=Math.sin(Math.PI*n),o=e+(-j(r.soft)/2-j(r.rough)-.01-e)*n;E?.setSplit(o,j(r.soft)*a,j(r.rough)*a,i),t.style.setProperty(`--edge`,String(Math.max(0,o)))},le=()=>{E?.destroy(),E=null,t.classList.add(`about__stage--still`),t.style.setProperty(`--still`,`url(${new URL(`photo.webp`,new URL(t.dataset.aboutScene,location.href)).href})`)},ue=async e=>{if(n){le(),te();return}try{let n=new URL(t.dataset.aboutScene,location.href),i=Tu?Eu:void 0,a=e?new Ll(t,{...await de(n),loop:!1,loading:!0,maxDpr:i}):new Ll(t,{preset:n.href,loop:!1,intro:!1,maxDpr:i});E=a,fu(a),a.setBleed(.08),Tu&&a.ready.then(()=>a.setPreset({depth:{occlusion:!1}}),()=>void 0),e?(M(0),N(0),F(0),e.track(a.ready,4),e.onChange(e=>a.setLoadProgress(e)),a.play()):te(),r(e=>O&&E===a&&a.frame(e)),O=!0,await a.ready,e||await a.photoLoaded,await new Promise(e=>{let t=r(()=>{a.canvas.style.visibility!==`hidden`&&(t(),e())})})}catch(e){console.error(e),le(),te()}},de=async e=>{let t=document.querySelector(`[data-lidar]`)?.dataset.lidar,[n,r]=await Promise.all([e,t&&new URL(t,location.href)].map(e=>e?fetch(e).then(e=>e.json()):{})),i={...n,morph:{...n.morph,...r.morph},intro:{...n.intro,...r.intro},photo:{...n.photo,delay:r.photo?.delay??n.photo.delay,duration:r.photo?.duration??n.photo.duration}},a=t=>new URL(t,e).href;return{preset:i,source:{color:a(`color.webp`),depth:a(`depth.webp`),photo:a(`photo.webp`)}}},fe=(e=!1)=>{let{timing:t}=xu,n=i.timeline({paused:!0});return e||n.add(Q(e=>M(1-e),{duration:t.settle,ease:`power2.inOut`}),0),n.add(Q(N,{duration:t.settle,ease:`power2.inOut`}),0).add(Q(e=>F(e*I()),{duration:t.sweep,ease:`power2.inOut`}),t.sweepAt).add(f(C(),.04),t.textAt).call(()=>void(x=!0),[],t.textAt).add(Q(e=>_.forEach(t=>t.style.opacity=String(e)),{duration:.8,ease:`power1.out`}),t.textAt+.3)},pe=()=>{let{timing:e}=xu,t=Math.max(e.settle,e.sweep),n=I();return x=!1,i.timeline({paused:!0}).add(p(w(),.02),0).add(Q(e=>_.forEach(t=>t.style.opacity=String(1-e)),{duration:.3}),0).add(Q(e=>F(n*(1-e)),{duration:t*.75,ease:`power2.inOut`}),.1).add(Q(e=>{N(1-e),M(e)},{duration:t,ease:wu}),.1)},me=0;a.addEventListener(`scroll`,()=>{he&&$.narrow&&!me&&!z.stop&&(me=requestAnimationFrame(()=>{me=0,F(I())}))},{passive:!0});let he=!1;Gl(()=>{y(),$.narrow||xe(),he&&(N(1),F(I()))});let R={y:0,target:0,stop:null},ge=()=>a.scrollHeight-a.clientHeight,_e=e=>{R.stop||(R.y=R.target=a.scrollTop),R.target=Math.min(Math.max(R.target+e,0),ge()),R.stop??=r((e,t)=>{R.y+=(R.target-R.y)*(1-.9**(t/1e3*60)),Math.abs(R.target-R.y)<.3&&(R.y=R.target,R.stop?.(),R.stop=null),a.scrollTop=R.y})},ve=e.querySelector(`.about__content`),z={y:0,goal:0,v:0,drag:null,stop:null},ye=e=>{if($.narrow){ve&&(ve.style.transform=`translate3d(0, ${(-e).toFixed(1)}px, 0)`),he&&F(I()),T();return}let t=Math.min(Math.max(e,0),ge());a.scrollTop=t;let n=e-t;ve&&(ve.style.transform=Math.abs(n)>.5?`translate3d(0, ${(-n).toFixed(1)}px, 0)`:``),he&&$.narrow&&F(I())},be=()=>z.stop??=r((e,t)=>{let n=t/1e3,r=z.drag?Du.follow:Du.glide,i=z.y-z.goal,a=(z.v+r*i)*n,o=Math.exp(-r*n);z.y=z.goal+(i+a)*o,z.v=(z.v-a*r)*o;let s=!z.drag&&Math.abs(z.y-z.goal)<.3&&Math.abs(z.v)<5;s&&(z.y=z.goal),ye(z.y),s&&(z.v=0,z.stop?.(),z.stop=null)}),xe=()=>{z.stop?.(),z.stop=null,z.drag=null,z.y=z.goal=z.v=0,ve&&(ve.style.transform=``)};a.addEventListener(`touchstart`,t=>{if(!e.classList.contains(`is-current`)||t.touches.length!==1)return;R.stop?.(),R.stop=null,!z.stop&&!$.narrow&&(z.y=a.scrollTop),z.goal=z.y,z.v=0;let n=t.touches[0].clientY;z.drag={y:n,from:z.y,t:performance.now(),last:n,v:0},be()},{passive:!0}),a.addEventListener(`touchmove`,e=>{let t=z.drag;if(!t||e.touches.length!==1)return;let n=e.touches[0].clientY,r=performance.now();t.v=(t.last-n)/(Math.max(r-t.t,1)/1e3),t.t=r,t.last=n;let i=t.from+t.y-n,a=ge();z.goal=i<0?i*Du.give:i>a?a+(i-a)*Du.give:i},{passive:!0});let Se=()=>{let e=z.drag;if(!e)return;z.drag=null;let t=performance.now()-e.t>80?0:e.v;z.goal=Math.min(Math.max(z.goal+t*Du.fling,0),ge()),be()};return a.addEventListener(`touchend`,Se,{passive:!0}),a.addEventListener(`touchcancel`,Se,{passive:!0}),{get scene(){return E},restingView:()=>$.narrow?L():null,prepare:e=>D??=ue(e),run:e=>{O=e,E?.setAwake(e)},enter:(e=!1)=>{k?.kill();let t=k=fe(e);return new Promise(e=>{t.eventCallback(`onComplete`,()=>{he=!0,e()}),t.play()})},leave:(e,t=0)=>{he=!1,k?.kill();let n=k=pe();return new Promise(i=>{n.eventCallback(`onComplete`,()=>{R.stop?.(),R.stop=null,xe(),a.scrollTop=0,i()}),n.timeScale(e).play();let o=r(()=>{(n.duration()-n.time())/e>t&&n.progress()<1||(o(),i())})})},toStrip:(e,t,n,r=!1)=>{he=!1;let a=xu.strip,o=t===`about`,s=o?L():ne,c=ie(e),l=ae(e),u=P(o?I():0),d=e=>{re({cx:s.cx+(c.cx-s.cx)*e,cy:s.cy+(c.cy-s.cy)*e,w:s.w+(c.w-s.w)*e,roll:c.roll*e});let t={top:l.top*e,right:l.right*e,bottom:l.bottom*e,left:l.left*e};e>0?oe(t):se(),n?.(t)},m=i.timeline({paused:!0}),h=ce(u);if(r){if(o){let e=a.focus*a.back;m.add(Q(e=>d(1-e),{duration:e,ease:`power3.out`}),0),m.add(Q(e=>h(1-e),{duration:a.sweep,ease:`power2.out`}),.1),m.add(f(C(),.04),e*.7),m.call(()=>void(x=!0),[],e*.7),m.add(Q(e=>_.forEach(t=>t.style.opacity=String(e)),{duration:.8,ease:`power1.out`}),e*.85)}else{let e=a.focus*a.toFilm;m.add(Q(e=>d(1-e),{duration:e,ease:`power2.inOut`}),0),m.add(Q(e=>h(1-e),{duration:e,ease:`power2.inOut`}),0),m.add(Q(M,{duration:e,ease:`power2.inOut`}),0)}return m}o&&(x=!1,m.add(p(w(),.02),0),m.add(Q(e=>_.forEach(t=>t.style.opacity=String(1-e)),{duration:.3}),0)),t===`film`&&m.add(Q(e=>M(1-e),{duration:1.2,ease:`power2.inOut`}),0);let g=o?.15:0;return m.add(Q(d,{duration:a.focus,ease:Su}),g).add(Q(h,{duration:a.sweep,ease:`power2.inOut`}),g)},fitStrip:(e,t)=>{he=!1,M(0),re(ie(e)),ce(0)(1);let n=ae(e);oe(n),t?.(n)},atRest:()=>{k?.kill(),k=null,he=!0,se(),M(0),N(1),F(I());for(let e of C())u(e),c(e)?Ql(e):m(e,1);x=!0;for(let e of _)e.style.opacity=`1`},reset:()=>{he=!1,k?.kill(),k=null,te(),x=!1,b.clear(),d();for(let e of s)h(e);for(let e of _)e.style.opacity=`0`;xe(),a.scrollTop=0},wheel:e=>{let t=e.deltaY*(e.deltaMode===1?100/6:e.deltaMode===2?innerHeight:1);if(!$.narrow)return _e(t);z.goal=Math.min(Math.max(z.goal+t,0),ge()),be()},scrollBy:_e}}function ku(){let e=document.querySelector(`[data-about-scene]`);if(!e?.dataset.aboutScene)return;let t=new URL(e.dataset.aboutScene,location.href);for(let e of[`preset.json`,`color.webp`,`depth.webp`,`photo.webp`])fetch(new URL(e,t),{priority:`low`}).catch(()=>{})}var Au=.6,ju=!0,Mu=null;function Nu(e){ju=e,Mu?.setAwake(e)}function Pu(e,t=!0){let i=document.querySelector(`[data-lidar]`);if(!i?.dataset.lidar)return null;let a=i.dataset.lidar,o=()=>{let e=new URL(a,location.href);i.style.setProperty(`--still`,`url(${new URL(`photo.webp`,e).href})`),i.classList.add(`stage--still`),fetch(e).then(e=>e.json()).then(e=>i.style.setProperty(`--still-zoom`,String(e.camera?.zoom??1))).catch(()=>{})};if(n)return o(),null;let s;try{s=new Ll(i,{preset:a,loading:t,loop:!1,intro:t});let e=Mu=s;r(t=>ju&&e.frame(t))}catch(e){return console.error(e),o(),null}s.ready.catch(e=>{console.error(e),s.destroy(),Mu=null,o()}),e.track(s.ready,4),t&&(e.onChange(e=>s.setLoadProgress(e)),s.play());let c=document.querySelector(`.hero__title`);if(c){Lu(c);let e=``,t=null;addEventListener(`resize`,()=>t=null),s.onFrame=()=>{t??={x:c.offsetLeft+c.offsetWidth/2,y:c.offsetTop+c.offsetHeight/2};let{x:n,y:r}=t,i=s.anchor(n,r,Au),a=`translate(${(i.x-n).toFixed(2)}px, ${(i.y-r).toFixed(2)}px) scale(${i.scale.toFixed(4)})`;a!==e&&(c.style.transform=e=a)}}return s}var Fu=null;function Iu(e){let t=getComputedStyle(e),n=Fu??=document.createElement(`canvas`).getContext(`2d`);n.font=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;let r=(e.textContent??``).trim(),i=n.measureText(r),a=parseFloat(t.fontSize),o=((parseFloat(t.lineHeight)||a)-(i.fontBoundingBoxAscent+i.fontBoundingBoxDescent))/2+i.fontBoundingBoxAscent,s=(parseFloat(t.letterSpacing)||0)*Math.max(r.length-1,0);return{left:-i.actualBoundingBoxLeft,right:i.actualBoundingBoxRight+s,top:o-i.actualBoundingBoxAscent,bottom:o+i.actualBoundingBoxDescent}}function Lu(e){let t=e.querySelector(`.hero__amp`),n=Array.from(e.querySelectorAll(`.hero__lead > .hero__word`));if(!t||n.length<2)return;let[r,i]=[n[0],n[n.length-1]],a=()=>{if(t.style.left=t.style.top=``,!$.narrow)return;let e=Iu(r),n=Iu(i),a=(e,t)=>({left:e.offsetLeft+t.left,right:e.offsetLeft+t.right,top:e.offsetTop+t.top,bottom:e.offsetTop+t.bottom}),o=a(r,e),s=a(i,n),c=s.bottom<=o.top+(o.bottom-o.top)/2,l=(o.right+s.left)/2,u=c?(o.top+s.bottom)/2:(o.bottom+s.top)/2,d=Iu(t);t.style.left=`${(l-(d.left+d.right)/2).toFixed(1)}px`,t.style.top=`${(u-(d.top+d.bottom)/2).toFixed(1)}px`};a(),document.fonts?.ready.then(a),addEventListener(`resize`,a)}var Ru=`<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2.5v7l6-3.5z" /></svg>`,zu=`<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3.4 2.5h1.7v7H3.4zM6.9 2.5h1.7v7H6.9z" /></svg>`,Bu=`<svg class="control__line" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" /></svg>`,Vu=`<svg class="control__line" viewBox="0 0 12 12" aria-hidden="true"><path d="M7.5 2.5 4 6l3.5 3.5" /></svg>`,Hu=`<svg class="control__line" viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6 4.5 9.5" /></svg>`,Uu=`<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1.8 4.4h1.9L6.4 2v8L3.7 7.6H1.8z" /><path class="control__line" d="M8 4.3a2.4 2.4 0 0 1 0 3.4M9.3 3a4.2 4.2 0 0 1 0 6" /></svg>`,Wu=`<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1.8 4.4h1.9L6.4 2v8L3.7 7.6H1.8z" /><path class="control__line" d="M8 4.5l3 3M11 4.5l-3 3" /></svg>`,Gu=e=>(e?.closest(`[lang]`)??document.documentElement).lang.toLowerCase().startsWith(`uk`)?`uk`:`en`,Ku=(e,t)=>e[Gu(t)],qu={hero:`/`,portfolio:`/portfolio`,about:`/about`,contacts:`/contacts`},Ju={portfolio:`Portfolio — Brian Fajardo`,about:`About — Brian Fajardo`,contacts:`Contacts — Brian Fajardo`},Yu=e=>document.querySelector(`[data-go="${e}"][data-title]`)?.dataset.title??Ju[e]??null,Xu=/^\/work\/([a-z0-9-]+)$/,Zu=document.documentElement.dataset.base??``,Qu=e=>{let t=e.replace(/\/+$/,``)||`/`;return Zu&&(t===Zu||t.startsWith(Zu+`/`))?t.slice(Zu.length)||`/`:t},$u=e=>{let t=Qu(e).match(Xu)?.[1];return t&&document.querySelector(`.case__entry[data-case="${t}"]`)?t:null},ed=e=>{let t=Qu(e).match(Xu)?.[1];return t&&document.querySelector(`[data-work][data-case="${t}"][data-soon]`)?t:null},td=`/privacy`,nd=e=>Qu(e)===td,rd=e=>{if($u(e))return`case`;if(ed(e))return`portfolio`;if(nd(e))return`contacts`;let t=Qu(e);return Object.keys(qu).find(e=>qu[e]===t)??`hero`},id=e=>Zu?e===`/`?Zu:Zu+e:e,ad=(e,t)=>id(e===`case`?`/work/${t}`:qu[e]),od=rd(location.pathname),sd=$u(location.pathname),cd=new URLSearchParams(location.search).get(`card`),ld=ed(location.pathname)??(cd&&document.querySelector(`[data-work][data-case="${CSS.escape(cd)}"]`)?cd:null),ud={out:.3,in:.55,stagger:.016,rise:.45,blur:.3},dd=new WeakMap;function fd(e,t){e.textContent=``;let n=[];return t.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t))return e.append(document.createTextNode(` `));let r=document.createElement(`span`);r.className=`swap__word`;for(let e of t){let t=document.createElement(`span`);t.className=`swap__ch`,t.textContent=e,r.append(t),n.push(t)}e.append(r)}),n}function pd(e,t){dd.get(e)?.kill();let n=ud,r=e.textContent?fd(e,e.textContent):[],a=`blur(${n.blur}em)`;return new Promise(o=>{let s=i.timeline({onComplete:()=>{e.textContent=t,dd.delete(e),o()}});r.length&&s.to(r,{yPercent:-n.rise*100,opacity:0,filter:a,duration:n.out,ease:`power2.in`,stagger:n.stagger*.6}),s.add(()=>{i.fromTo(fd(e,t),{yPercent:n.rise*100,opacity:0,filter:a},{yPercent:0,opacity:1,filter:`blur(0em)`,duration:n.in,ease:`power3.out`,stagger:n.stagger})}),s.to({},{duration:n.in+n.stagger*t.replace(/\s/g,``).length}),dd.set(e,s)})}function md(e,t={}){let n=window.gtag;n?.(`event`,e,t)}var hd={firma:[{at:.4,to:[0,.62,.36],move:1.3,say:`Hi! Let me show you Firma — a site for a law firm.`},{at:3.4,to:[0,.5,.52],move:.9,mark:[0,.5,.53,.34,.14],say:`The first screen says what they do, in one plain line.`},{at:7,to:[0,.41,.82],move:.9,click:!0,say:`Then two doors: a conflict to solve, or support every day.`},{at:10.6,scroll:1,to:[1,.5,.42],move:1.3,say:`Every service gets one sentence — no legal smoke screen.`},{at:13.6,to:[2,.48,.56],move:1},{at:15.4,scroll:3,to:[3,.56,.48],move:1.3,say:`And a world to match it: the wild field of law as a desert.`},{at:19.4,scroll:0,to:[0,.3,.24],move:1.4,say:`That’s the gist. Ask me anything about it.`},{at:23,say:``}]},gd=e=>[{at:.4,to:[0,.6,.4],move:1.3,say:`Hi! Let me walk you through ${e}.`},{at:3.4,to:[0,.5,.5],move:.9,mark:[0,.5,.5,.3,.2],say:`This is where it starts — the first screen.`},{at:7,scroll:1,to:[1,.5,.45],move:1.3,say:`Here’s how it unfolds, step by step.`},{at:10.4,to:[2,.5,.55],move:1,click:!0},{at:12.2,scroll:3,to:[3,.55,.5],move:1.3,say:`And this is how it all comes together.`},{at:16,scroll:0,to:[0,.3,.25],move:1.4,say:`That’s it. Ask me anything about it.`},{at:19.6,say:``}],_d=e=>hd[e]??gd(document.querySelector(`.case__entry[data-case="${e}"] .case__title`)?.textContent?.trim()??`it`),vd=new Map,yd=e=>{if(!vd.has(e)){let t=document.querySelector(`.case__entry[data-case="${e}"] .case__talk-data`)?.textContent,n=null;try{n=t?JSON.parse(t):null}catch{n=null}vd.set(e,n)}return vd.get(e)??null},bd=e=>{let t=yd(e);if(t)return t.length;let n=_d(e);return n[n.length-1].at+.6},xd=(e,t)=>{let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=n+r>>1;e[a][0]<=t?(i=a,n=a+1):r=a-1}return i},Sd={grow:26,growNarrow:17,open:.9,glide:`power3.inOut`,narrowBand:{top:.18,bottom:.52,aim:.36}},Cd=[`iris`,`warm`],wd=`site:glow`,Td=()=>{let e=new URLSearchParams(location.search).get(`glow`);if(!e)try{e=localStorage.getItem(wd)}catch{e=null}return Cd.includes(e)?e:Cd[0]};function Ed(e){let t=document.createElement(`div`);t.className=`talk`,t.setAttribute(`aria-hidden`,`true`),t.innerHTML=`
    <button class="talk__player control-host" type="button" tabindex="-1">
      <span class="talk__frame"><img src="${document.querySelector(`.case__face img`)?.getAttribute(`src`)||`/cases/common/presenter.webp`}" alt="" /><video class="talk__film" playsinline preload="none"></video></span>
      <svg class="talk__progress" viewBox="0 0 100 100"><circle cx="50" cy="50" r="49" pathLength="1" /></svg>
      <span class="talk__voice"><i></i><i></i><i></i><i></i><i></i></span>
      <span class="talk__toggle control"><span class="talk__pause">${zu}</span><span class="talk__play">${Ru}</span></span>
    </button>
    <button class="talk__close control" type="button" tabindex="-1" aria-label="Close the presentation">${Bu}</button>
    <svg class="talk__mark"><ellipse pathLength="1" /></svg>
    <span class="talk__ripple"></span>
    <span class="talk__cursor"><svg viewBox="0 0 24 24"><path d="M4.5 2.8 19 11.4l-6.4 1.5-3.1 6.3z" /></svg><b>Brian</b></span>
    <p class="talk__sub"><span class="talk__line"></span></p>`;let n=document.createElement(`div`);n.className=`glow`,n.setAttribute(`aria-hidden`,`true`),n.dataset.tone=Td(),document.body.append(n,t);let a=e=>t.querySelector(e),o=a(`.talk__player`),s=a(`.talk__player img`),c=a(`.talk__progress circle`),l=Array.from(t.querySelectorAll(`.talk__voice i`)),u=a(`.talk__close`),d=a(`.talk__toggle`),f=a(`.talk__mark`),p=a(`.talk__mark ellipse`),m=a(`.talk__ripple`),h=a(`.talk__cursor`),g=a(`.talk__line`),_=a(`.talk__film`),v=!1,y=e=>{v=e,t.classList.toggle(`is-loading`,e)};_.addEventListener(`waiting`,()=>E&&!_.paused&&y(!0)),_.addEventListener(`playing`,()=>{y(!1),t.classList.add(`is-framed`)});let b=null,x=null,S=1,C=!1,w={x:0,y:0,fromX:0,fromY:0,t:1,to:null},T=null,E=null,D=t=>e.pointOf(t[0],t[1],t[2]),O=e=>{let t=e?.closest(`.case__entry`);return t&&!$.narrow?Array.from(t.querySelectorAll(`.case__note`)):[]},k=0,A=0,j=(e,t)=>{if(_.paused||_.seeking||_.readyState<3||e.paused||e.seeking)return;A=A*.92+(e.currentTime-t)*.08;let n=performance.now();Math.abs(A)>.2&&n-k>3e3&&(k=n,A=0,e.currentTime=t)},M=()=>{if(!E)return;let{talk:t,voice:n}=E,r=_.currentTime;n&&j(n,r);let a=t.track,o=xd(a.pointer,r),s=a.pointer[o],c=a.pointer[o+1],l=null;if(a.v===2){let t=e.frame;if(s&&t){let e=c&&c[0]>s[0]?Math.min(Math.max((r-s[0])/(c[0]-s[0]),0),1):0,n=t.x+(s[1]+((c?.[1]??s[1])-s[1])*e)*t.w,i=t.y+(s[2]+((c?.[2]??s[2])-s[2])*e)*t.w;l={x:Math.min(Math.max(n,6),innerWidth-6),y:Math.min(Math.max(i,6),innerHeight-6)}}}else if(s&&s[1]>=0){let t=c&&c[1]===s[1]&&c[0]>s[0]?Math.min(Math.max((r-s[0])/(c[0]-s[0]),0),1):0;l=e.pointOf(s[1],s[2]+((c?.[2]??s[2])-s[2])*t,s[3]+((c?.[3]??s[3])-s[3])*t)}for(l&&(w.x=l.x,w.y=l.y),!!l!==E.seen&&(E.seen=!!l,i.to(h,{autoAlpha:+!!l,duration:.25,overwrite:!0}));E.click<a.clicks.length&&a.clicks[E.click]<=r;)E.click++,P();for(;E.scroll<a.scroll.length&&a.scroll[E.scroll][0]<=r;){let[,t,n]=a.scroll[E.scroll++];(!$.narrow||a.v!==2)&&e.scrollToMark(t,n)}if(l&&$.narrow&&a.v===2){let{top:t,bottom:n,aim:r}=Sd.narrowBand;(l.y<innerHeight*t||l.y>innerHeight*n)&&e.scrollPointTo(l.y,innerHeight*r)}let u=t.subs.findIndex(e=>e.s<=r&&r<e.e);u!==E.cue&&(E.cue=u,ee(u>=0?t.subs[u].t:``),u<0&&(C=!_.paused))};r(t=>{if(!b)return;if(M(),w.to){let e=D(w.to);if(e){let t=i.parseEase(Sd.glide)(w.t);w.x=w.fromX+(e.x-w.fromX)*t,w.y=w.fromY+(e.y-w.fromY)*t}}if(h.style.transform=`translate3d(${w.x.toFixed(1)}px, ${w.y.toFixed(1)}px, 0)`,T){let t=e.pointOf(T[0],T[1],T[2]),n=e.pointOf(T[0],T[1]+T[3],T[2]+T[4]);if(t&&n){let e=Math.abs(n.x-t.x),r=Math.abs(n.y-t.y);f.style.transform=`translate3d(${(t.x-e-8).toFixed(1)}px, ${(t.y-r-8).toFixed(1)}px, 0)`,f.setAttribute(`width`,String(Math.round(e*2+16))),f.setAttribute(`height`,String(Math.round(r*2+16))),p.setAttribute(`cx`,String(e+8)),p.setAttribute(`cy`,String(r+8)),p.setAttribute(`rx`,String(e)),p.setAttribute(`ry`,String(r))}}let n=t/1e3;l.forEach((e,t)=>{let r=C&&!v&&!(E?_.paused:b.paused())?.25+.75*Math.abs(Math.sin(n*(5.3+t*1.7)+t*1.3)*Math.sin(n*(2.1+t*.6))):.18;e.style.transform=`scaleY(${r.toFixed(3)})`}),c.style.strokeDashoffset=String(1-Math.min((E?_.currentTime:b.time())/S,1))});let N=(e,t)=>(w.fromX=w.x,w.fromY=w.y,w.to=e,w.t=0,i.to(w,{t:1,duration:t,ease:`none`})),ee=e=>{C=!!e,t.classList.toggle(`is-saying`,C),e&&pd(g,e)},P=()=>{i.fromTo(m,{x:w.x,y:w.y,scale:.2,autoAlpha:.9},{scale:1,autoAlpha:0,duration:.7,ease:`power2.out`}),i.fromTo(h.querySelector(`svg`),{scale:1},{scale:.82,duration:.12,yoyo:!0,repeat:1,ease:`power2.out`,transformOrigin:`20% 15%`})},F=e=>{T=e,i.timeline().fromTo(p,{strokeDashoffset:1},{strokeDashoffset:0,duration:.9,ease:`power2.inOut`}).set(f,{autoAlpha:1},0).to(f,{autoAlpha:0,duration:.5,ease:`power1.in`},2.6).add(()=>T=null)},I=e=>{let t=($.narrow?Sd.growNarrow:Sd.grow)*$.rem,n=$.narrow?e.right-t:e.left,r=$.narrow?e.bottom-t:e.top;Object.assign(o.style,{left:`${n}px`,top:`${r}px`,width:`${t}px`,height:`${t}px`});let i=e.width/t;return{x:e.left-n,y:e.top-r,scale:i,size:t,left:n,top:r}},te=(e=!1)=>{let r=x,a=b;if(b=null,!a)return;a.kill(),E&&=(_.pause(),E.voice?.pause(),_.onwaiting=_.onplaying=null,_.removeAttribute(`src`),_.load(),y(!1),t.classList.remove(`is-film`,`is-framed`),null),ee(``),C=!1,w.to=null,T=null,n.classList.remove(`is-on`),i.killTweensOf([s,h,f,t,o,u,d]);let c=()=>{t.classList.remove(`is-on`,`is-paused`,`is-touch`),r&&(r.style.visibility=``,r.closest(`.case__entry`)?.classList.remove(`is-playing`)),i.to(O(r),{opacity:1,duration:.5,ease:`power1.out`})};if(e===`fade`&&r){i.to(t,{autoAlpha:0,duration:.35,ease:`power1.in`,onComplete:()=>{i.set([h,f,u,d],{autoAlpha:0}),c(),i.set(t,{clearProps:`opacity,visibility`})}});return}if(e||!r){i.set([h,f,u,d],{autoAlpha:0}),c();return}let l=I(r.getBoundingClientRect());i.timeline({onComplete:c}).to([h,f,u,d],{autoAlpha:0,duration:.3},0).to(o,{x:l.x,y:l.y,scale:l.scale,duration:.7,ease:`expo.inOut`},0)};return o.addEventListener(`click`,()=>{if(b){if(E){let e=!_.paused;e?(_.pause(),E.voice?.pause()):(_.play(),E.voice&&(E.voice.currentTime=_.currentTime),E.voice?.play()),t.classList.toggle(`is-paused`,e);return}b.paused(!b.paused()),i.getTweensOf(w).forEach(e=>e.paused(b.paused())),t.classList.toggle(`is-paused`,b.paused())}}),u.addEventListener(`click`,()=>te()),addEventListener(`keydown`,e=>{b&&e.key===`Escape`&&(e.preventDefault(),e.stopImmediatePropagation(),te())},{capture:!0}),{play:(r,a,c)=>{if(b)return te();md(`presentation_play`,{case:r}),i.killTweensOf(t),i.set(t,{clearProps:`opacity,visibility`}),x=a;let l=c??yd(r),f=l?[]:_d(r);S=l?l.length:bd(r);let p=a.getBoundingClientRect(),m=I(p);a.style.visibility=`hidden`,a.closest(`.case__entry`)?.classList.add(`is-playing`),i.to(O(a),{opacity:0,duration:.4,ease:`power1.in`}),t.classList.add(`is-on`),t.classList.toggle(`is-touch`,$.narrow),n.classList.add(`is-on`),g.textContent=``;let v=.5+Math.SQRT1_2/2;if(Object.assign(u.style,{left:`${m.left+m.size*v-u.offsetWidth/2}px`,top:`${m.top+m.size*(1-v)-u.offsetHeight/2}px`}),w.x=w.fromX=m.left+m.size*.85,w.y=w.fromY=m.top+m.size*.15,w.to=null,w.t=1,e.scrollToItem(0),l){_.src=l.video,_.classList.toggle(`is-mirrored`,!!l.mirror),_.preload=`auto`,_.muted=!!l.audio,y(!0);let e=l.audio?new Audio(l.audio):null;e&&(e.preload=`auto`),E={talk:l,voice:e,click:0,scroll:0,cue:-1,seen:!1},_.onwaiting=()=>e?.pause(),_.onplaying=()=>{e&&E&&!t.classList.contains(`is-paused`)&&(e.currentTime=_.currentTime,A=0,e.play().catch(()=>void 0))},t.classList.add(`is-film`),i.set(h,{autoAlpha:0}),_.onended=()=>te();let n=i.timeline();n.fromTo(o,{x:m.x,y:m.y,scale:m.scale},{x:0,y:0,scale:1,duration:Sd.open,ease:`expo.out`},0).fromTo([u,d],{autoAlpha:0},{autoAlpha:1,duration:.5},Sd.open*.6).add(()=>{_.play().catch(()=>void 0),e?.play().catch(()=>void 0),C=!0},.35),b=n;return}let T=i.timeline({onComplete:()=>te()});T.fromTo(o,{x:m.x,y:m.y,scale:m.scale},{x:0,y:0,scale:1,duration:Sd.open,ease:`expo.out`},0).fromTo([u,d],{autoAlpha:0},{autoAlpha:1,duration:.5},Sd.open*.6).fromTo(h,{autoAlpha:0},{autoAlpha:1,duration:.4},.3).fromTo(s,{scale:1.02},{scale:1.06,xPercent:-1,duration:3.1,ease:`sine.inOut`,repeat:Math.ceil(S/3.1),yoyo:!0},0);for(let t of f)if(t.say!==void 0&&T.add(()=>ee(t.say),t.at),t.scroll!==void 0&&T.add(()=>e.scrollToItem(t.scroll),t.at),t.to){let e=t.move??1;T.add(()=>void N(t.to,e),t.at+(t.scroll===void 0?0:.35));let n=t.at+(t.scroll===void 0?0:.35)+e;t.click&&T.add(P,n),t.mark&&T.add(()=>F(t.mark),n-.2)}T.to(h,{autoAlpha:0,duration:.4},S-.5),b=T},stop:e=>te(e),get playing(){return!!b}}}var Dd=`modulepreload`,Od=function(e){return`/wp-content/themes/piven/dist/`+e},kd={},Ad=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Od(t,n),t=s(t),t in kd)return;kd[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Dd,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},jd={fade:1.6,stagger:.07,slide:1.1,block:3.2},Md={en:{next:`Next project`,talk:`Presentation`},uk:{next:`Наступний проєкт`,talk:`Презентація`}},Nd=e=>`${Math.floor(e/60)}:${String(Math.round(e%60)).padStart(2,`0`)}`;function Pd(e){let t=document.querySelector(`.case`),n=t?.querySelector(`.case__panel`),a=document.querySelector(`.case__nav`),s=document.querySelector(`.case-ground`);if(!t||!n||!a||!e)return null;let c=e.caseSheet,u=e.list,d=a.querySelector(`.case__count`),f=Ed(c);c.onOpen=e=>{let t=_?.entry;t&&Ad(()=>import(`./site-B753E6Zg.js`).then(n=>n.openViewer(t.media,e)),[])};let p=Array.from(t.querySelectorAll(`.case__entry[data-case]`)),m=new Map;for(let e of p){let t=e.dataset.case,n=Array.from(e.querySelectorAll(`.case__media > li`)).map(e=>{let t=e.querySelector(`img`),n=e.querySelector(`video`);return{kind:e.hasAttribute(`data-blank`)?`blank`:e.dataset.embed?`embed`:n?`video`:`image`,src:(($.narrow&&e.dataset.phone||n?.getAttribute(`src`))??t?.getAttribute(`src`))||``,poster:e.dataset.poster??``,aspect:parseFloat(e.dataset.aspect??``)||16/9,span:e.dataset.span===`half`?`half`:`full`,caption:e.querySelector(`[data-caption]`)?.textContent?.trim()??``,section:``,peek:e.dataset.peek??``,full:e.dataset.full??``,sound:e.hasAttribute(`data-sound`),embed:e.dataset.embed??``}}),r=e.querySelector(`.case__title`)?.textContent?.trim()??t;m.set(t,{el:e,entry:{slug:t,title:r,work:u.find(e=>e.slug===t)??null,media:n,next:null}})}let h=u.filter(e=>m.has(e.slug)).map(e=>m.get(e.slug));h.forEach((e,t)=>{let n=h[(t+1)%h.length];n!==e&&(e.entry.next=n.entry);let r=document.createElement(`a`);r.className=`case__next`,r.href=ad(`case`,n.entry.slug),r.textContent=`${Ku(Md).next}: ${n.entry.work?`${n.entry.work.title}, ${n.entry.work.subtitle}`:n.entry.title}`,r.addEventListener(`click`,e=>{e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),A.onOpen?.(n.entry.slug))}),e.el.append(r)});let g=e=>{let t=h.findIndex(t=>t.entry.slug===e),n=e=>String(e).padStart(2,`0`);return t<0?``:`${n(t+1)} / ${n(h.length)}`};a.querySelector(`.case__back`)?.addEventListener(`click`,()=>A.onBack?.());let _=null,v=`admin`in document.documentElement.dataset,y=(e,t,n)=>{let r=document.createElement(`button`);r.type=`button`,r.className=`case__record`,r.textContent=e.querySelector(`.case__talk-data`)?`Перезаписати презентацію`:`Записати презентацію`,r.addEventListener(`click`,()=>{f.stop(!0),Ad(()=>import(`./site-BQ_T6Yjy.js`).then(n=>n.record({slug:e.dataset.case,id:e.dataset.id??``,face:t,sheet:c,walkthrough:f})),[])}),n.append(r),new URLSearchParams(location.search).has(`record`)&&sd===e.dataset.case&&setTimeout(()=>r.click(),2600)};for(let e of p){let t=e.querySelector(`.case__face`),n=e.querySelector(`[data-talk-note]`);if(!t){let t=e.querySelector(`.case__talk--none`);v&&t&&y(e,t,t);continue}let r=Nd(bd(e.dataset.case));t.classList.add(`control-host`),t.insertAdjacentHTML(`beforeend`,`<span class="case__play control" aria-hidden="true">${Ru}</span><span class="case__tag" aria-hidden="true">${Ru}<span>${Ku(Md).talk}</span></span>`);let i=t.querySelector(`.case__tag`),a=()=>i&&e.querySelector(`.case__talk`)?.style.setProperty(`--tag-over`,`${Math.max(0,(i.offsetWidth-t.offsetWidth)/2)}px`);if(requestAnimationFrame(a),addEventListener(`resize`,a),n){let e=n.textContent?.trim()||`I walk you through it`;n.innerHTML=`<span class="case__note-made"></span><span class="case__note-clock">0:00 / ${r}</span>`,n.firstElementChild.textContent=`${e} · ${r}`}t.addEventListener(`click`,()=>f.play(e.dataset.case,t));let o=t.closest(`.case__talk`);v&&o&&y(e,t,o)}let b=e=>e.querySelector(`.case__text`),x=()=>{if(!_)return;if(!$.narrow)return c.setStory(0);let e=b(_.el);c.setStory(e.offsetTop+e.offsetHeight+jd.block*$.rem)},S=new ResizeObserver(()=>x()),C=e=>{S.disconnect(),S.observe(b(e))},w=``;r(()=>{if(_&&t.classList.contains(`is-shown`)){if($.narrow){let e=c.scrolled.toFixed(1);e!==w&&_.el.style.setProperty(`--scroll`,w=e)}else w&&=(_.el.style.removeProperty(`--scroll`),``)}});let T=!1,E=(e,n)=>{if(!s)return i.timeline();!e&&T&&(Nu(!0),T=!1);let r=i.timeline().to(s,{autoAlpha:e&&$.narrow?1:0,duration:n,ease:`power1.inOut`,overwrite:!0});return e&&$.narrow&&r.add(()=>{t.classList.contains(`is-shown`)&&$.narrow&&(Nu(!1),T=!0)}),r};Gl(()=>{t.classList.contains(`is-shown`)&&(E(!0,0),x())});let D=e=>Array.from(e.querySelectorAll(`[data-case-fade]`)),O=e=>Array.from(e.querySelectorAll(`.case__title [data-goo]`)),k=()=>jd.fade*$.rem,A={has:e=>!!e&&m.has(e),title:e=>{let t=m.get(e)?.el.dataset.title;if(t)return t;let n=m.get(e)?.entry.work;return`${n?`${n.title}, ${n.subtitle}`:m.get(e)?.entry.title??``} — Brian Fajardo`},work:e=>m.get(e)?.entry.work??null,warm:e=>{let t=e?[m.get(e)].filter(e=>!!e):[...m.values()];return Promise.all(t.map(e=>c.warm(e.entry))).then(()=>void 0)},open:e=>{let r=m.get(e);if(!r)return Promise.resolve();f.stop(!0),_&&_!==r&&(_.el.hidden=!0),_?.el.style.removeProperty(`--scroll`),n.scrollTop=0,_=r,r.el.hidden=!1,i.set(D(r.el),{autoAlpha:0});for(let e of O(r.el))l(e);if(w=``,d){let n=g(e);d.textContent&&t.classList.contains(`is-shown`)?pd(d,n):d.textContent=n}let a=c.setEntry(r.entry);return C(r.el),x(),a},show:()=>{t.classList.add(`is-shown`);let e=i.timeline();return _?(x(),e.add(E(!0,.6),0),$.narrow?i.set([n,a],{xPercent:0}):e.fromTo([n,a],{xPercent:100},{xPercent:0,duration:jd.slide,ease:`power3.out`},0),e.fromTo(a,{autoAlpha:0},{autoAlpha:1,duration:.8,ease:`power1.out`},$.narrow?.3:.5).add(A.textIn(),$.narrow?0:.3)):e},hide:()=>{f.stop(`fade`);let e=A.textOut().to(a,{autoAlpha:0,duration:.3,ease:`power1.in`},0);return e.add(E(!1,.5),.1),$.narrow||e.to([n,a],{xPercent:100,duration:.7,ease:`power3.in`},.15),e},textOut:()=>{let e=_?.el,t=i.timeline();return e?t.add(o(O(e),1,0,{duration:.5,stagger:.04}),0).to(D(e),{autoAlpha:0,y:-.6*k(),duration:.4,ease:`power2.in`,stagger:.03},0):t},textIn:()=>{let e=_?.el,t=i.timeline();return e?t.add(o(O(e),0,1,{duration:1.3,stagger:.08}),0).fromTo(D(e),{autoAlpha:0,y:k()},{autoAlpha:1,y:0,duration:1,ease:`power3.out`,stagger:jd.stagger},.12):t},wheel:e=>$.narrow||!(e.target instanceof Node)||!n.contains(e.target)||n.scrollHeight-n.clientHeight<1?!1:(n.scrollTop+=e.deltaY*(e.deltaMode===1?40:e.deltaMode===2?innerHeight:1),!0),setActive:e=>{t.classList.toggle(`is-current`,e)}};return A}var Fd={grid:1.1,dot:1.1,rest:.07,hover:{radius:9,light:.45,push:.4},ripple:{speed:42,width:2.6,life:1.1,light:.55,push:.3},scan:{every:7,duration:1.8,light:.22,width:6},voice:{step:70,max:120,lines:9,points:220,gather:.9},video:{points:2400,max:60,radius:10,thumb:2.2,gather:1.1,develop:.9},send:{life:.75,sweep:.25,rise:45}},Id={en:{write:`Write it, or tap Voice or Video to say it`,writing:`Or say it instead: Voice or Video`,voiceRec:`Recording. Tap stop when you’re done`,voice:`Listen back, or delete and record again`,videoRec:`You’re on air, up to a minute`,video:`Watch it back, or delete and record again`,noMic:`No microphone access. Allow it in the browser, or write instead`,noCamera:`No camera access. Allow it in the browser, or write instead`,demo:`Demo: no microphone or camera here, so it’s pretend`},uk:{write:`Напишіть або натисніть «Голос» чи «Відео», щоб сказати`,writing:`Або скажіть це: «Голос» чи «Відео»`,voiceRec:`Іде запис. Натисніть стоп, коли закінчите`,voice:`Прослухайте або видаліть і запишіть знову`,videoRec:`Ви в кадрі, до хвилини`,video:`Перегляньте або видаліть і запишіть знову`,noMic:`Немає доступу до мікрофона. Дозвольте його в браузері або напишіть`,noCamera:`Немає доступу до камери. Дозвольте її в браузері або напишіть`,demo:`Демо: тут браузер не дає мікрофон і камеру, тож це понарошку`}},Ld={en:{write:``,voiceRec:`Voice`,voice:`Voice message`,videoRec:`Video`,video:`Video message`},uk:{write:``,voiceRec:`Голос`,voice:`Голосове`,videoRec:`Відео`,video:`Відеоповідомлення`}},Rd=()=>su.accent,zd=()=>su.fg,Bd=10,Vd=72,Hd=Math.PI*2,Ud=[`audio/mp4`,`audio/webm;codecs=opus`,`audio/webm`],Wd=[`video/mp4`,`video/webm;codecs=vp9,opus`,`video/webm;codecs=vp8,opus`,`video/webm`],Gd=matchMedia(`(prefers-reduced-motion: reduce)`).matches,Kd=(e,t=0,n=1)=>e<t?t:e>n?n:e,qd=(e,t,n)=>e+(t-e)*n,Jd=()=>performance.now()/1e3,Yd=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`,Xd=e=>e.find(e=>MediaRecorder.isTypeSupported(e))??``,Zd=4.4;function Qd(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1103515245),((r^r>>>16)>>>0)/4294967296}var $d=class{data=[];size=[];constructor(){for(let e=0;e<20;e++)this.data.push(new Float32Array(6144)),this.size.push(0)}add(e,t,n,r,i){if(r<=.03)return;let a=(i?Bd:0)+Math.min(Bd,Math.ceil(r*Bd))-1,o=this.data[a],s=this.size[a];if(s+3>o.length){let e=new Float32Array(o.length*2);e.set(o),o=this.data[a]=e}o[s]=e,o[s+1]=t,o[s+2]=n,this.size[a]=s+3}flush(e){for(let t=0;t<20;t++){let n=this.size[t];if(!n)continue;let r=this.data[t];e.fillStyle=`rgba(${t>=Bd?Rd():zd()},${(t%Bd+1)/Bd})`;for(let t=0;t<n;t+=3){let n=r[t+2];e.fillRect(r[t]-n/2,r[t+1]-n/2,n,n)}this.size[t]=0}}};function ef(e){let t=Math.abs(Math.sin(e*7.3)),n=Math.sin(e*.9)>-.5?1:.06;return Math.min(1,.05+n*t*(.45+.55*Math.abs(Math.sin(e*2.1)))+Math.random()*.08)}function tf(e,t,n){let r=.06*Math.sin(n*.7),i=-.12+.04*Math.sin(n*1.1),a=Math.hypot((e-r)/.42,(t-i)/.55);if(a<1){let n=Math.abs(e-r)-.16,o=t-i+.06;return n*n/.004+o*o/.0015<1?.15:.85-.5*a**4}let o=e/.95,s=(t-1.05)/.62;return o*o+s*s<1?.5:.12}function nf(e,t,n){let r=[];for(let i of e.split(`
`)){let e=``;for(let a of i.split(/(\s+)/))e&&a.trim()&&n.measureText(e+a).width>t?(r.push(e.trimEnd()),e=a):e+=a;r.push(e)}return r}var rf=class extends EventTarget{root;mode=`write`;box;text;clock;label;hint;canvas;ctx;dots=new $d;rem=10;dpr=1;bw=0;bh=0;mx=0;my=0;cw=0;ch=0;pad=24;gx=new Float32Array;gy=new Float32Array;gb=new Float32Array;gs=new Float32Array;wave={from:0,to:0};pointer={x:0,y:0,on:!1,k:0};ripples=[];lastRipple=0;focused=!1;focus=0;nextScan=0;scanAt=-1;levels=[];level=0;lastStep=0;audio=null;analyser=null;wave32=new Float32Array(1024);ru;rk;rj;rsx;rsy;rdelay;lines=[];ribbon={gather:0,amp:0};ux;uy;sx;sy;delay;phase;sample;lum=new Float32Array(5184).fill(.3);lo=0;hi=1;sampler;disc={gather:0,big:1,develop:0};face;video;still;faceStyle=``;stream=null;recorder=null;chunks=[];fake=!1;startedAt=0;duration=0;take=null;player=null;playing=!1;playAt=0;shownSecond=-1;flight=null;sending=!1;hintText=``;visible=!0;enabled=!0;dirty=!0;mirror=null;layer;measurer;lineEls=[];lineH=24;reach={top:0,bottom:0};lineWidth=0;constructor(e){super(),this.root=e,this.box=e.querySelector(`.composer__box`),this.text=e.querySelector(`.composer__text`),this.clock=e.querySelector(`.composer__clock`),this.label=e.querySelector(`.composer__label`),this.hint=e.querySelector(`[data-composer-hint]`),this.canvas=e.querySelector(`.composer__dots`),this.ctx=this.canvas.getContext(`2d`);let t=document.createElement(`canvas`);t.width=t.height=Vd,this.sampler=t.getContext(`2d`,{willReadFrequently:!0}),this.face=document.createElement(`div`),this.face.className=`composer__face`,this.face.setAttribute(`aria-hidden`,`true`),this.video=document.createElement(`video`),this.video.playsInline=!0,this.video.muted=!0,this.still=document.createElement(`canvas`),this.face.append(this.still,this.video),this.canvas.after(this.face);let n=Fd.video.points;this.ux=new Float32Array(n),this.uy=new Float32Array(n),this.sx=new Float32Array(n),this.sy=new Float32Array(n),this.delay=new Float32Array(n),this.phase=new Float32Array(n),this.sample=new Int32Array(n);let i=Math.PI*(3-Math.sqrt(5));for(let e=0;e<n;e++){let t=Math.sqrt((e+.5)/n);this.ux[e]=t*Math.cos(e*i),this.uy[e]=t*Math.sin(e*i),this.delay[e]=Math.random()*.5,this.phase[e]=Math.random()*Hd;let r=Math.min(71,Math.floor((this.ux[e]*.5+.5)*Vd)),a=Math.min(71,Math.floor((this.uy[e]*.5+.5)*Vd));this.sample[e]=a*Vd+r}let{lines:a,points:o}=Fd.voice,s=a*o;this.ru=new Float32Array(s),this.rk=new Uint8Array(s),this.rj=new Float32Array(s),this.rsx=new Float32Array(s),this.rsy=new Float32Array(s),this.rdelay=new Float32Array(s);for(let e=0;e<a;e++){let t=e/Math.max(a-1,1);this.lines.push({amp:(e%2?-1:1)*(1-.7*t),freq:2.2+Math.random()*1.6,phase:Math.random()*Hd,speed:(1.4+Math.random()*1.8)*(Math.random()<.5?-1:1),alpha:e===0?.95:.18+.35*Math.random()})}for(let e=0;e<s;e++)this.rk[e]=Math.floor(e/o),this.ru[e]=Kd((e%o+.5+(Math.random()-.5)*.7)/o),this.rj[e]=(Math.random()-.5)*1.4,this.rdelay[e]=Math.random()*.5;this.layer=document.createElement(`div`),this.layer.className=`composer__lines`,this.layer.setAttribute(`aria-hidden`,`true`),this.text.before(this.layer),this.measurer=document.body.appendChild(document.createElement(`div`)),this.text.addEventListener(`scroll`,()=>this.curl()),this.text.addEventListener(`input`,e=>{this.grow(),e.inputType&&this.rippleAtCaret(),this.say(this.hintFor()),this.dispatchEvent(new Event(`change`))}),this.text.addEventListener(`focus`,()=>this.focused=!0),this.text.addEventListener(`blur`,()=>this.focused=!1),this.box.addEventListener(`pointermove`,e=>{if(e.pointerType!==`mouse`)return;let t=this.box.getBoundingClientRect(),n=this.unscale(t);this.pointer.x=(e.clientX-t.left)*n,this.pointer.y=(e.clientY-t.top)*n,this.pointer.on=!0}),this.box.addEventListener(`pointerleave`,()=>this.pointer.on=!1),this.box.addEventListener(`pointerdown`,e=>{if(e.pointerType===`mouse`)return;let t=this.box.getBoundingClientRect(),n=this.unscale(t);this.ripple((e.clientX-t.left)*n,(e.clientY-t.top)*n)});let c=e=>this.mode===`write`&&!this.sending&&!e.target.closest(`button, textarea`);this.box.addEventListener(`mousedown`,e=>c(e)&&e.preventDefault()),this.box.addEventListener(`click`,e=>{if(!c(e))return;let t=this.text.value.length;this.text.focus(),this.text.setSelectionRange(t,t)});for(let t of e.querySelectorAll(`[data-act]`))t.addEventListener(`click`,()=>this.act(t.dataset.act??``));new ResizeObserver(()=>this.measure()).observe(this.box),new IntersectionObserver(([e])=>this.visible=e.isIntersecting).observe(e),this.measure(),this.hint.textContent=this.hintText=Ku(Id,this.root).write,this.label.textContent=``,r((e,t)=>this.tick(e/1e3,t))}get message(){if(this.mode===`voice`||this.mode===`video`)return{kind:this.mode,text:``,blob:this.take?.blob??null,duration:this.duration};let e=this.text.value.trim();return this.mode===`write`&&e?{kind:`text`,text:e,blob:null,duration:0}:null}get recording(){return this.mode===`voiceRec`||this.mode===`videoRec`}say(e,t=!1){this.hint.parentElement?.classList.toggle(`is-warn`,t),e!==this.hintText&&(this.hintText=e,pd(this.hint,e))}async stop(){if(!this.recording)return;let e=this.mode===`videoRec`;this.duration=Math.max(.5,Jd()-this.startedAt),this.clock.textContent=Yd(this.duration);let t=this.take={blob:null,url:``},n=this.finish();e&&this.freeze(),this.release(),e&&i.to(this.disc,{big:0,duration:.7,ease:`power3.out`}),this.setMode(e?`video`:`voice`);let r=await n;r&&this.take===t&&(t.blob=r,t.url=URL.createObjectURL(r))}async send(){if(this.sending||(this.recording&&await this.stop(),!this.message))return;this.sending=!0,this.stopPlaying();let e=this.mode,t=e===`write`?this.textPoints():e===`voice`?this.ribbonPoints():this.discPoints();this.root.classList.add(`is-sending`),this.text.readOnly=!0,i.killTweensOf(this.disc),i.killTweensOf(this.ribbon),this.disc.gather=0,this.disc.develop=0,this.ribbon.gather=0,this.ripple(this.bw/2,this.bh/2);let n=e===`video`?this.discAt():void 0;await new Promise(e=>this.flight=this.fly(t,e,n)),this.drop(),this.text.value=``,this.text.readOnly=!1,this.grow(),this.root.classList.remove(`is-sending`),this.sending=!1,this.setMode(`write`),this.grow()}act(e){this.sending||(e===`voice`?this.startVoice():e===`video`?this.startVideo():e===`stop`?this.stop():e===`play`?this.togglePlay():(e===`cancel`||e===`delete`)&&this.discard())}setMode(e){this.mode=e,this.root.dataset.mode=e,this.label.textContent=Ku(Ld,this.root)[e],this.shownSecond=-1,this.say(this.hintFor(),this.fake&&e!==`write`),e===`write`&&this.grow(),this.dirty=!0,this.dispatchEvent(new Event(`change`))}hintFor(){let e=Ku(Id,this.root);return this.fake&&this.mode!==`write`?e.demo:this.mode===`write`?this.text.value.trim()?e.writing:e.write:e[this.mode]}async open(e){if(!navigator.mediaDevices?.getUserMedia)return`demo`;try{return this.stream=await navigator.mediaDevices.getUserMedia(e)}catch{return this.say(e.video?Ku(Id,this.root).noCamera:Ku(Id,this.root).noMic,!0),null}}record(e,t,n){if(this.chunks=[],this.recorder=null,typeof MediaRecorder>`u`)return;let r=Xd(t);try{this.recorder=new MediaRecorder(e,{...r&&{mimeType:r},...n.video&&{videoBitsPerSecond:n.video},audioBitsPerSecond:n.audio})}catch{return}this.recorder.ondataavailable=e=>e.data.size&&this.chunks.push(e.data),this.recorder.start()}finish(){let e=this.recorder;return this.recorder=null,!e||e.state===`inactive`?Promise.resolve(null):new Promise(t=>{e.onstop=()=>t(this.chunks.length?new Blob(this.chunks,{type:e.mimeType}):null),e.stop()})}release(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video.srcObject&&(this.video.srcObject=null),this.audio?.close(),this.audio=null,this.analyser=null}async startVoice(){if(this.mode!==`write`)return;let e=await this.open({audio:{echoCancellation:!0,noiseSuppression:!0}});e&&this.mode===`write`&&(this.fake=e===`demo`,e!==`demo`&&(this.audio=new AudioContext,this.analyser=this.audio.createAnalyser(),this.analyser.fftSize=1024,this.audio.createMediaStreamSource(e).connect(this.analyser),this.record(e,Ud,{audio:96e3})),this.levels=[],this.level=0,this.lastStep=0,this.scatter(this.rsx,this.rsy),i.killTweensOf(this.ribbon),this.ribbon.gather=0,i.to(this.ribbon,{gather:1,duration:Fd.voice.gather,ease:`none`}),this.startedAt=Jd(),this.setMode(`voiceRec`))}async startVideo(){if(this.mode!==`write`)return;let e=await this.open({video:{facingMode:`user`,width:{ideal:640},height:{ideal:640}},audio:!0});if(!e||this.mode!==`write`)return;if(this.fake=e===`demo`,e!==`demo`){let t=this.video;t.removeAttribute(`src`),t.muted=!0,t.srcObject=e,t.play().catch(()=>{}),this.face.dataset.show=`video`,this.record(e,Wd,{video:12e5,audio:96e3})}this.scatter(this.sx,this.sy),i.killTweensOf(this.disc);let{gather:t,develop:n}=Fd.video;Object.assign(this.disc,{big:1,gather:0,develop:0}),i.to(this.disc,{gather:1,duration:t,ease:`none`}),e!==`demo`&&i.to(this.disc,{develop:1,duration:n,delay:t*.75,ease:`power2.out`}),this.startedAt=Jd(),this.setMode(`videoRec`)}discard(){let e=this.mode===`videoRec`||this.mode===`video`,t=this.mode===`voiceRec`||this.mode===`voice`;this.finish(),this.release(),this.stopPlaying(),this.drop(),e&&(i.killTweensOf(this.disc),i.timeline().to(this.disc,{develop:0,duration:.35,ease:`power2.in`}).to(this.disc,{gather:0,duration:.8,ease:`power2.in`})),t&&(i.killTweensOf(this.ribbon),i.to(this.ribbon,{gather:0,duration:.8,ease:`power2.in`})),this.setMode(`write`)}scatter(e,t){for(let n=0;n<e.length;n++){let r=Math.floor(Math.random()*this.gx.length);e[n]=this.gx[r],t[n]=this.gy[r]}}freeze(){let e=this.video;if(!e.videoWidth)return;let t=Math.min(e.videoWidth,e.videoHeight);this.still.width=this.still.height=360,this.still.getContext(`2d`).drawImage(e,(e.videoWidth-t)/2,(e.videoHeight-t)/2,t,t,0,0,360,360),this.face.dataset.show=`still`}drop(){this.take?.url&&URL.revokeObjectURL(this.take.url),this.take=null,this.fake=!1}togglePlay(){if(this.playing)return this.stopPlaying();if(this.take){if(this.playing=!0,this.playAt=Jd(),this.root.classList.add(`is-playing`),this.take.url){let e=this.mode===`video`?this.video:this.player&&this.player!==this.video?this.player:new Audio;e===this.video&&(this.video.srcObject=null,this.video.muted=!1,this.face.dataset.show=`video`),e.src=this.take.url,e.currentTime=0,e.onended=()=>this.stopPlaying(),e.play().catch(()=>{}),this.player=e}this.mode===`video`&&i.to(this.disc,{big:1,duration:.7,ease:`power3.out`})}}stopPlaying(){this.playing&&(this.playing=!1,this.player?.pause(),this.player===this.video&&(this.face.dataset.show=`still`),this.root.classList.remove(`is-playing`),this.clock.textContent=Yd(this.duration),this.mode===`video`&&i.to(this.disc,{big:0,duration:.7,ease:`power3.out`}),this.dirty=!0)}played(){return Kd(this.player&&this.take?.url?this.player.currentTime/this.duration:(Jd()-this.playAt)/this.duration)}grow(){let e=this.text;if(!e.offsetParent){e.style.height=``;return}let t=e.scrollTop;e.style.height=`auto`;let n=parseFloat(getComputedStyle(e).lineHeight)||24;e.style.height=`${Math.min(e.scrollHeight,n*5)}px`,e.scrollTop=e.selectionEnd>=e.value.length?e.scrollHeight:t,this.relayout()}relayout(){let e=this.text,t=e.value;if(!t||!e.offsetParent){this.layer.replaceChildren(),this.lineEls=[];return}let n=getComputedStyle(e);this.lineH=parseFloat(n.lineHeight)||24,this.lineWidth=e.clientWidth;let r=this.measurer;Object.assign(r.style,{position:`absolute`,left:`0`,top:`0`,visibility:`hidden`,padding:`0`,border:`0`,width:`${e.clientWidth}px`,font:n.font,letterSpacing:n.letterSpacing,wordSpacing:n.wordSpacing,lineHeight:n.lineHeight,whiteSpace:`pre-wrap`,overflowWrap:`break-word`});let i=[];for(let e of t.split(`
`)){r.textContent=``;let t=[];for(let n of e.split(/(\s+)/)){if(!n)continue;let e=r.appendChild(document.createElement(`span`));e.textContent=n,t.push(e)}for(let e=0;e<t.length;e++){if(t[e].getClientRects().length<2)continue;let n=[...t[e].textContent].map(e=>Object.assign(document.createElement(`span`),{textContent:e}));t[e].replaceWith(...n),t.splice(e,1,...n),e+=n.length-1}let n=``,a=t[0]?.offsetTop??0;for(let e of t)e.offsetTop>a+1&&(i.push(n),n=``,a=e.offsetTop),n+=e.textContent;i.push(n)}for(r.textContent=``;this.lineEls.length<i.length;){let e=this.layer.appendChild(document.createElement(`div`));e.className=`composer__line`,this.lineEls.push(e)}for(let e of this.lineEls.splice(i.length))e.remove();i.forEach((e,t)=>{this.lineEls[t].textContent!==e&&(this.lineEls[t].textContent=e)});let a=this.box.getBoundingClientRect(),o=e.getBoundingClientRect(),s=.3*this.rem,c=this.unscale(a);this.reach.top=Math.max(0,(o.top-a.top)*c-s),this.reach.bottom=Math.max(0,(a.bottom-o.bottom)*c-s),Object.assign(this.layer.style,{left:`${e.offsetLeft}px`,top:`${e.offsetTop-this.reach.top}px`,width:`${e.clientWidth}px`,height:`${e.clientHeight+this.reach.top+this.reach.bottom}px`}),this.curl()}curl(){let e=this.lineEls.length;if(!e)return;let t=this.text,n=this.lineH,r=t.clientHeight,i=t.scrollTop,{top:a,bottom:o}=this.reach,s=Math.PI/2;for(let t=0;t<e;t++){let e=t*n-i,c=e+n/2,l=e,u=0,d=0,f=1,p=(e,t,r,i)=>{let a=e/r,o=Math.min(a,s);l=t+i*r*Math.sin(o)-n/2,u=-i*o,d=-r*(1-Math.cos(o)),f=a>=s?0:1-.9*(o/s)**1.5};c>r&&o>1?p(c-r,r,o,1):c<0&&a>1&&p(-c,0,a,-1);let m=this.lineEls[t];l+=a,m.style.transform=u?`translate3d(0,${l.toFixed(2)}px,${d.toFixed(2)}px) rotateX(${u.toFixed(4)}rad)`:`translate3d(0,${l.toFixed(2)}px,0)`,m.style.opacity=f<.999?f.toFixed(3):``}}unscale(e){return e.width>0?this.box.offsetWidth/e.width:1}ripple(e,t){Gd||(this.ripples.push({x:e,y:t,t:Jd()}),this.ripples.length>8&&this.ripples.shift())}rippleAtCaret(){let e=Jd();if(e-this.lastRipple<.05)return;this.lastRipple=e;let t=this.text,n=getComputedStyle(t),r=this.mirror??=document.body.appendChild(document.createElement(`div`));for(let e of[`font`,`letterSpacing`,`lineHeight`,`padding`,`border`,`boxSizing`,`wordSpacing`])r.style[e]=n[e];Object.assign(r.style,{position:`absolute`,left:`0`,top:`0`,visibility:`hidden`,whiteSpace:`pre-wrap`,overflowWrap:`break-word`,width:`${t.clientWidth}px`}),r.textContent=t.value.slice(0,t.selectionStart);let i=r.appendChild(document.createElement(`span`));i.textContent=`​`;let a=this.box.getBoundingClientRect(),o=t.getBoundingClientRect(),s=this.unscale(a),c=parseFloat(n.lineHeight)||24;this.ripple((o.left-a.left)*s+i.offsetLeft,(o.top-a.top)*s+i.offsetTop-t.scrollTop+c/2)}measure(){this.rem=$.rem,this.dpr=Math.min(devicePixelRatio||1,2);let e=this.box.offsetWidth,t=this.box.offsetHeight;this.pad=parseFloat(getComputedStyle(this.box).paddingLeft)||2.4*this.rem;let n=4*this.rem;this.mx=n,this.my=18*this.rem,this.cw=e+2*n,this.ch=t+this.my+n;let r=this.canvas,i=Math.round(this.cw*this.dpr),a=Math.round(this.ch*this.dpr),o=r.width!==i||r.height!==a;o&&(r.width=i,r.height=a,Object.assign(r.style,{left:`${-n}px`,top:`${-this.my}px`,width:`${this.cw}px`,height:`${this.ch}px`})),(e!==this.bw||t!==this.bh)&&(this.bw=e,this.bh=t,this.build()),this.measureWave(),this.text.clientWidth!==this.lineWidth&&this.relayout(),this.dirty=!0,o&&this.draw(Jd())}build(){let e=Fd.grid*this.rem,t=Math.ceil(this.bw/2/e),n=Math.ceil(this.bh/2/e),r=(2*t+1)*(2*n+1),i=new Float32Array(r),a=new Float32Array(r),o=new Float32Array(r),s=new Float32Array(r),c=0;for(let r=-n;r<=n;r++)for(let n=-t;n<=t;n++){let t=this.bw/2+(n+(Qd(n,r,1)-.5)*.9)*e,l=this.bh/2+(r+(Qd(n,r,2)-.5)*.9)*e;if(t<2||t>this.bw-2||l<2||l>this.bh-2)continue;let u=Qd(n,r,3);i[c]=t,a[c]=l,o[c]=Qd(n,r,5)<.2?0:.5+.9*u*u,s[c]=.7+.6*Qd(n,r,4),c++}this.gx=i.subarray(0,c),this.gy=a.subarray(0,c),this.gb=o.subarray(0,c),this.gs=s.subarray(0,c)}measureWave(){this.wave.from=this.pad,this.wave.to=this.bw-this.pad}tick(e,t){if(!this.visible||!this.enabled)return;let n=Fd,r=1-Math.exp(-t/90);if(this.mode===`write`&&!this.sending&&!Gd&&(this.nextScan||=e+n.scan.every*.4,e>=this.nextScan&&(this.scanAt=e,this.nextScan=e+n.scan.every)),this.recording){let t=e-this.startedAt;this.showTime(t),t>=(this.mode===`voiceRec`?n.voice.max:n.video.max)&&this.stop()}else if(this.playing){let e=this.played();this.showTime(e*this.duration),e>=1&&!(this.player&&this.take?.url)&&this.stopPlaying()}for(this.mode===`voiceRec`&&this.listen(e),(this.mode===`videoRec`||this.mode===`video`&&this.playing)&&this.look(this.video,e),this.focus+=(+!!this.focused-this.focus)*r,this.pointer.k+=(+!!this.pointer.on-this.pointer.k)*r;this.ripples.length&&e-this.ripples[0].t>n.ripple.life;)this.ripples.shift();let a=this.scanAt>=0&&e-this.scanAt<n.scan.duration,o=this.levels,s=this.mode===`voiceRec`?this.level:this.mode===`voice`?this.playing?o[Math.min(o.length-1,Math.floor(this.played()*o.length))]??0:.3:0,c=Math.abs(s-this.ribbon.amp)>.002;this.ribbon.amp+=(s-this.ribbon.amp)*(1-Math.exp(-t/70)),(this.dirty||this.recording||this.playing||this.flight!==null||this.ripples.length>0||a||c||i.isTweening(this.disc)||i.isTweening(this.ribbon)||Math.abs(this.pointer.k-+!!this.pointer.on)>.002||this.pointer.on&&this.pointer.k>0||Math.abs(this.focus-+!!this.focused)>.002)&&(this.dirty=!1,this.draw(e))}showTime(e){let t=Math.floor(e);t!==this.shownSecond&&(this.shownSecond=t,this.clock.textContent=Yd(e))}listen(e){let t;if(this.analyser){this.analyser.getFloatTimeDomainData(this.wave32);let e=0;for(let t=0;t<this.wave32.length;t++)e+=this.wave32[t]*this.wave32[t];t=Math.min(1,Math.sqrt(Math.sqrt(e/this.wave32.length)*6))}else t=ef(e);this.level=Math.max(t,this.level*.86),e*1e3-this.lastStep>=Fd.voice.step&&(this.lastStep=e*1e3,this.levels.push(this.level))}look(e,t){let n=this.lum;if(this.fake||!e.videoWidth){if(!this.fake)return;for(let e=0;e<Vd;e++)for(let r=0;r<Vd;r++)n[e*Vd+r]=tf(r/Vd*2-1,e/Vd*2-1,t);return}let r=this.sampler,i=Math.min(e.videoWidth,e.videoHeight);r.setTransform(-1,0,0,1,Vd,0),r.drawImage(e,(e.videoWidth-i)/2,(e.videoHeight-i)/2,i,i,0,0,Vd,Vd);let a=r.getImageData(0,0,Vd,Vd).data,o=1,s=0;for(let e=0;e<n.length;e++){let t=(.299*a[e*4]+.587*a[e*4+1]+.114*a[e*4+2])/255;n[e]=t,t<o&&(o=t),t>s&&(s=t)}this.lo+=(o-this.lo)*.1,this.hi+=(s-this.hi)*.1;let c=Math.max(this.hi-this.lo,.08);for(let e=0;e<n.length;e++)n[e]=Kd((n[e]-this.lo)/c)}draw(e){let t=this.ctx;t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,this.cw,this.ch),t.translate(this.mx,this.my),this.drawFrame(t,e),this.drawField(e),this.ribbon.gather>.001&&this.drawRibbon(e),this.disc.gather>.001&&this.drawDisc(e),this.flight&&this.drawFlight(e),this.dots.flush(t),this.placeFace()}placeFace(){let{gather:e,develop:t}=this.disc,n=`opacity:0`;if(e>.001&&t>.001){let{x:e,y:r,r:i}=this.discAt(),a=Fd.video.radius*this.rem,o=(1-t)*.8*this.rem;n=`width:${2*a}px;height:${2*a}px;opacity:${t.toFixed(3)};transform:translate(${(e-a).toFixed(1)}px,${(r-a).toFixed(1)}px) scale(${(i/a).toFixed(4)})`+(o>.3?`;filter:blur(${o.toFixed(1)}px)`:``)}n!==this.faceStyle&&(this.faceStyle=n,this.face.style.cssText=n)}drawFrame(e,t){let{bw:n,bh:r,rem:i}=this,a=this.recording,o=.5+.5*Math.sin(t*4);e.fillStyle=a?`rgba(${Rd()},${.3+.15*o})`:`rgba(${zd()},${.14+.1*this.focus})`,e.fillRect(0,0,n,1),e.fillRect(0,r-1,n,1),e.fillRect(0,0,1,r),e.fillRect(n-1,0,1,r);let s=.8*i,c=this.focus*.5*i+(a?.3*i*o:0);e.fillStyle=a?`rgba(${Rd()},0.9)`:`rgba(${zd()},${.45+.35*this.focus})`;for(let[t,i,a,o]of[[0,0,-1,-1],[n,0,1,-1],[0,r,-1,1],[n,r,1,1]]){let n=t+a*c,r=i+o*c;e.fillRect(n-s,r-.5,2*s,1),e.fillRect(n-.5,r-s,1,2*s)}}drawField(e){let t=Fd,{rem:n,gx:r,gy:i}=this,a=this.dots,o=(t.rest+.04*this.focus)*(1-.75*this.disc.gather)*(1-.6*this.ribbon.gather),s=this.pointer.k,c=t.hover.radius*n,{x:l,y:u}=this.pointer,d=t.ripple.width*n,f=this.ripples.map(r=>({x:r.x,y:r.y,radius:(e-r.t)*t.ripple.speed*n,fade:1-(e-r.t)/t.ripple.life})),p=this.scanAt>=0?(e-this.scanAt)/t.scan.duration:2,m=t.scan.width*n,h=-m+(this.bw+2*m)*(1-(1-Kd(p))**2),g=p<1?Math.sin(Math.PI*p)*t.scan.light:0;for(let e=0;e<r.length;e++){let p=r[e],_=i[e],v=o*this.gb[e],y=0,b=0,x=0;if(s>.002){let e=p-l,r=_-u,i=e*e+r*r;if(i<c*c){let a=Math.sqrt(i)||1,o=(1-a/c)**2*s;v+=t.hover.light*o,y+=e/a*t.hover.push*n*o,b+=r/a*t.hover.push*n*o}}for(let e of f){let r=p-e.x,i=_-e.y,a=Math.sqrt(r*r+i*i)||1,o=Math.abs(a-e.radius);if(o<d){let s=(1-o/d)*e.fade;v+=t.ripple.light*s,x=Math.max(x,s),y+=r/a*t.ripple.push*n*s,b+=i/a*t.ripple.push*n*s}}if(g>0){let e=Math.abs(p-h);e<m&&(v+=g*(1-e/m))}a.add(p+y,_+b,t.dot*this.gs[e]*(1+.6*x),Math.min(v,1),x>.35)}}band(){let e=this.pad+Zd*this.rem,t=(this.bh-e)/2-.4*this.rem;return{from:this.wave.from,to:this.wave.to,mid:(e+this.bh)/2,swing:t*(.04+.96*this.ribbon.amp)}}onRibbon(e,t,n){let r=this.lines[this.rk[e]],i=this.ru[e],a=(i-.5)*4-.35*Math.sin(t*.5),o=(4/(4+a**4))**4,s=r.freq*a+r.phase+t*r.speed;return{x:n.from+i*(n.to-n.from),y:n.mid+n.swing*r.amp*o*(.75*Math.sin(s)+.25*Math.sin(1.9*s+r.phase))+this.rj[e],env:o}}drawRibbon(e){let t=this.dots,n=this.band(),r=this.ribbon.gather,i=this.playing&&this.mode===`voice`?qd(n.from,n.to,this.played()):-1,a=2*this.rem;for(let o=0;o<this.ru.length;o++){let s=Kd((r-this.rdelay[o])/.5);if(s<=0)continue;let c=1-(1-s)**3,l=this.onRibbon(o,e,n),u=l.x,d=l.y;if(c<1){let e=this.rsx[o],t=this.rsy[o],n=Math.hypot(l.x-e,l.y-t)||1,r=Math.sin(c*Math.PI)*a*(this.rdelay[o]>.25?1:-1);u=e+(l.x-e)*c-(l.y-t)/n*r,d=t+(l.y-t)*c+(l.x-e)/n*r}let f=this.rk[o]===0,p=i>=0&&l.x<=i,m=this.lines[this.rk[o]].alpha*(.2+.8*Math.sqrt(l.env))*(.3+.7*c);t.add(u,d,f?1.6:1.2,p?Math.min(1,m+.3):m,f&&!p)}}discAt(){let{rem:e,bw:t,bh:n,pad:r}=this,i=Fd.video,a=i.thumb*e,o=i.radius*e,s=this.disc.big,c=$.narrow;return{x:qd(r+a,t/2,s),y:qd(r+Zd/2*e,c?r+7*e+o:n/2,s),r:qd(a,o,s)}}drawDisc(e){let t=this.dots,{x:n,y:r,r:i}=this.discAt(),a=i/(Fd.video.radius*this.rem),o=this.disc.gather,s=2.4*this.rem,c=1-this.disc.develop;for(let l=0;l<(c>.01?this.ux.length:0);l++){let u=1-(1-Kd((o-this.delay[l])/.5))**3,d=this.phase[l],f=n+this.ux[l]*i+Math.sin(e*1.7+d)*.5*a,p=r+this.uy[l]*i+Math.cos(e*1.3+d)*.5*a,m=f,h=p;if(u<1){let e=this.sx[l],t=this.sy[l],n=Math.hypot(f-e,p-t)||1,r=Math.sin(u*Math.PI)*s*(d>Math.PI?1:-1);m=e+(f-e)*u-(p-t)/n*r,h=t+(p-t)*u+(f-e)/n*r}let g=this.lum[this.sample[l]];t.add(m,h,(.7+1.5*g)*Math.max(a,.5),(.12+.88*g**1.3)*(.3+.7*u)*c,g<.82)}let l=this.disc.big;if(l<.02)return;let u=this.recording?(Jd()-this.startedAt)/Fd.video.max:this.playing?this.played():1,d=i+1.4*this.rem*a;for(let e=0;e<120;e++){let i=-Math.PI/2+e/120*Hd,a=e/120<=u;t.add(n+Math.cos(i)*d,r+Math.sin(i)*d,a?1.8:1.2,(a?.9:.16)*o*l,a)}}drawFlight(e){let t=this.flight,n=this.dots,r=e-t.t0,i=Fd.send.rise*this.rem,a=!1;for(let e=0;e<t.n;e++){let o=r-t.delay[e];if(o>t.life[e])continue;if(a=!0,o<=0){n.add(t.x[e],t.y[e],t.s[e],t.a[e],t.yellow[e]===1);continue}let s=o/t.life[e],c=(1-Math.exp(-3*o))/3,l=t.x[e]+t.bx[e]*c+t.vx[e]*o+Math.sin(o*3+t.phase[e])*.8*this.rem*s,u=t.y[e]+t.by[e]*c-t.vy[e]*o-.75*i*o*o;n.add(l,u,t.s[e]*(1-.5*s),t.a[e]*(1-s)**1.6,t.yellow[e]===1)}a||(this.flight=null,t.done())}fly(e,t,n){let r=e.length,i={t0:Jd(),n:r,x:new Float32Array(r),y:new Float32Array(r),vx:new Float32Array(r),vy:new Float32Array(r),s:new Float32Array(r),a:new Float32Array(r),delay:new Float32Array(r),life:new Float32Array(r),phase:new Float32Array(r),bx:new Float32Array(r),by:new Float32Array(r),yellow:new Uint8Array(r),done:t},a=Fd.send,o=this.rem;return e.forEach((e,t)=>{if(i.x[t]=e.x,i.y[t]=e.y,i.s[t]=e.s,i.a[t]=e.a,i.yellow[t]=+!!e.yellow,i.delay[t]=n?Math.random()*.15:e.x/Math.max(this.bw,1)*a.sweep+Math.random()*.12,n){let r=e.x-n.x,a=e.y-n.y,s=Math.hypot(r,a)||1,c=(8+Math.random()*22)*o;i.bx[t]=r/s*c,i.by[t]=a/s*c}i.life[t]=a.life*(.7+Math.random()*.6),i.vx[t]=(Math.random()-.5)*2*o,i.vy[t]=a.rise*o*(.2+Math.random()*.5),i.phase[t]=Math.random()*Hd}),i}textPoints(){let e=this.text,t=getComputedStyle(e),n=e.clientWidth,r=e.clientHeight,i=document.createElement(`canvas`);i.width=Math.ceil(n*2),i.height=Math.ceil(r*2);let a=i.getContext(`2d`,{willReadFrequently:!0});a.scale(2,2),a.font=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`,`letterSpacing`in a&&(a.letterSpacing=t.letterSpacing),a.fillStyle=`#fff`,a.textBaseline=`middle`;let o=parseFloat(t.lineHeight)||24,s=parseFloat(t.paddingLeft)||0,c=parseFloat(t.paddingTop)||0;nf(e.value,n-s-(parseFloat(t.paddingRight)||0),a).forEach((t,n)=>a.fillText(t,s,c+o*(n+.5)-e.scrollTop));let l=a.getImageData(0,0,i.width,i.height).data,u=this.box.getBoundingClientRect(),d=e.getBoundingClientRect(),f=(d.left-u.left)*this.unscale(u),p=(d.top-u.top)*this.unscale(u),m=e=>{let t=[];for(let n=0;n<i.height;n+=e)for(let r=0;r<i.width;r+=e)l[(n*i.width+r)*4+3]>110&&t.push({x:f+r/2,y:p+n/2,s:1.3,a:.95,yellow:!1});return t},h=3,g=m(h);for(;g.length>7e3;)g=m(++h);return g}ribbonPoints(){let e=this.band(),t=Jd(),n=[];for(let r=0;r<this.ru.length;r++){let i=this.onRibbon(r,t,e),a=this.rk[r]===0;n.push({x:i.x,y:i.y,s:a?1.6:1.2,a:this.lines[this.rk[r]].alpha*(.2+.8*Math.sqrt(i.env)),yellow:a})}return n}discPoints(){let{x:e,y:t,r:n}=this.discAt(),r=n/(Fd.video.radius*this.rem),i=[];for(let a=0;a<this.ux.length;a++){let o=this.lum[this.sample[a]];i.push({x:e+this.ux[a]*n,y:t+this.uy[a]*n,s:(.7+1.5*o)*Math.max(r,.5),a:.12+.88*o**1.3,yellow:o<.82})}return i}},af={examples:{en:[`name@mail.com`,`instagram.com/you`,`linkedin.com/in/you`,`+63 917 123 4567`],uk:[`name@mail.com`,`instagram.com/you`,`+63 917 123 4567`,`linkedin.com/in/you`]},every:2.6},of={email:`<rect x="3.5" y="6" width="17" height="12" rx="1.5"/><path d="M4 7l8 6 8-6"/>`,phone:`<path d="M7 3.5h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 5 5.5a2 2 0 0 1 2-2z"/>`,telegram:`<path d="M20.5 4.5L3.5 11l6 2.3m11-8.8L17.3 19.5 9.5 13.3m11-8.8L9.5 13.3V18.5l2.8-3"/>`,instagram:`<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.6" cy="7.4" r="0.4"/>`,linkedin:`<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8.2 10.5V16m0-8.3v.2m3.5 8.1v-5.5m0 2.6c0-1.6 1-2.6 2.2-2.6s2.1 1 2.1 2.6V16"/>`,whatsapp:`<path d="M4.2 19.8l1.2-3.9a8 8 0 1 1 2.9 2.8z"/><path d="M9.2 8.8c0 3.3 2.7 6 6 6l1-1.6-2.1-1-1.1 1a4 4 0 0 1-2.2-2.2l1-1.1-1-2.1z"/>`,viber:`<path d="M12 3.5c-4.6 0-8 1.4-8 6.8 0 3 1 4.8 2.8 5.8V20l3-2.6c.7.1 1.4.1 2.2.1 4.6 0 8-1.4 8-6.8S16.6 3.5 12 3.5z"/><path d="M12.6 7.2a3.4 3.4 0 0 1 3.2 3.2m-3.2-1.2a1.4 1.4 0 0 1 1.3 1.3M9 8.5c0 2.6 2 4.6 4.6 4.6l.8-1.2-1.6-.8-.8.8a3 3 0 0 1-1.6-1.6l.8-.8-.8-1.6z"/>`,facebook:`<path d="M15 4.5h-1.8a3 3 0 0 0-3 3V20M7.5 11h6.5"/>`,behance:`<path d="M3.5 7.5h4a2.1 2.1 0 0 1 0 4.2h-4zm0 4.2h4.6a2.4 2.4 0 0 1 0 4.8H3.5zM14.5 8.5h4.5m-5 5h6.2a3.1 3.1 0 1 0-1 2.4"/>`,dribbble:`<circle cx="12" cy="12" r="8.5"/><path d="M5.2 7.5c4 1.3 9.3.6 12.6-2.2M3.6 13.2c4.6-2.4 11-2.2 16.6.8M8.7 4.2c3.2 3.6 5.6 9.4 6.2 15.6"/>`},sf={telegram:`Telegram`,instagram:`Instagram`,linkedin:`LinkedIn`,whatsapp:`WhatsApp`,viber:`Viber`,facebook:`Facebook`,behance:`Behance`,dribbble:`Dribbble`},cf={en:{names:{email:`Email`,phone:`Phone`,...sf},via:`via`,replyVia:`Reply via`,unknown:`Email, phone or @nick?`,site:`Not a site: email or a profile`,long:`Too many digits`,missing:`Where should I reply?`},uk:{names:{email:`Пошта`,phone:`Телефон`,...sf},via:`через`,replyVia:`Відповісти через`,unknown:`Пошта, телефон чи @нік?`,site:`Не сайт: пошта чи профіль`,long:`Забагато цифр`,missing:`Куди вам відповісти?`}},lf={en:[`whatsapp`,`telegram`,`viber`],uk:[`telegram`,`viber`,`whatsapp`]},uf=[[/^(t\.me|telegram\.me)\/./,`telegram`],[/^(instagram\.com|instagr\.am)\/./,`instagram`],[/^([a-z]{2,3}\.)?linkedin\.com\/./,`linkedin`],[/^(wa\.me|api\.whatsapp\.com|whatsapp\.com)\/./,`whatsapp`],[/^(m\.)?(facebook\.com|fb\.com|m\.me)\/./,`facebook`],[/^behance\.net\/./,`behance`],[/^dribbble\.com\/./,`dribbble`]];function df(e,t){let n=e.trim();if(!n)return null;let r=Ku(cf,t);if(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(n))return{kinds:[`email`]};let i=n.replace(/^https?:\/\//i,``).replace(/^www\./i,``);for(let[e,t]of uf)if(e.test(i))return{kinds:[t]};if(/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}(\/\S*)?$/i.test(i))return{kinds:[],note:r.site};let a=n.replace(/[\s()\-.]/g,``);if(/^\+?\d+$/.test(a)){let e=Gu(t)===`uk`,n=Ku(lf,t),i=a.replace(/^\+/,``);if((!a.startsWith(`+`)||i.startsWith(`380`))&&(i.startsWith(`380`)||i.startsWith(`0`))){let t=i.startsWith(`380`)?i.slice(3):i.slice(1);return t.length>9?{kinds:[],note:r.long}:t.length<9?{kinds:e?[`phone`]:[],pending:!0}:{kinds:e?[`phone`,...n]:n,digits:`380${t}`}}return i.length>=8?{kinds:n,digits:i}:{kinds:[],pending:!0}}let o=n.replace(/^@/,``);return/^[a-z0-9_.]{3,32}$/i.test(o)?{kinds:[`telegram`,`instagram`],nick:o}:{kinds:[],note:r.unknown}}var ff=e=>`+380 ${e.slice(3,5)} ${e.slice(5,8)} ${e.slice(8,10)} ${e.slice(10)}`,pf=e=>!!e&&e.length===12&&e.startsWith(`380`),mf=class extends EventTarget{root;input;example;kind;reading=null;picked=null;shown=``;next=0;shownExample=``;enabled=!0;constructor(e){super(),this.root=e,this.input=e.querySelector(`.reply__input`),this.example=e.querySelector(`.reply__example`),this.kind=e.querySelector(`.reply__kind`),this.example.textContent=this.shownExample=Ku(af.examples,this.root)[0],e.querySelector(`.reply__lead`)?.addEventListener(`click`,()=>this.input.focus()),this.input.addEventListener(`input`,()=>{this.picked=null,this.root.classList.remove(`is-wrong`),this.update()}),this.input.addEventListener(`blur`,()=>{pf(this.reading?.digits)&&(this.input.value=ff(this.reading.digits))}),this.kind.addEventListener(`click`,e=>{let t=e.target.closest(`[data-kind]`);!t||!this.reading||this.reading.kinds.length<2||(this.picked=t.dataset.kind,this.paint(),this.input.focus())}),r(e=>this.turn(e/1e3)),this.update()}get contact(){let e=this.reading;if(!e||e.pending||e.note||!e.kinds.length)return null;let t=this.current(),n=this.input.value.trim(),r;return r=e.nick?t===`telegram`?`https://t.me/${e.nick}`:`https://instagram.com/${e.nick}`:e.digits?{phone:`tel:+${e.digits}`,whatsapp:`https://wa.me/${e.digits}`,telegram:`https://t.me/+${e.digits}`,viber:`viber://chat?number=%2B${e.digits}`}[t]:t===`email`?`mailto:${n}`:`https://${n.replace(/^https?:\/\//i,``)}`,{kind:t,text:pf(e.digits)?ff(e.digits):n,link:r}}warn(){this.root.classList.add(`is-wrong`),this.reading||this.showNote(Ku(cf,this.root).missing),this.input.focus()}current(){let e=this.reading?.kinds??[];return this.picked&&e.includes(this.picked)?this.picked:e[0]??null}update(){this.reading=df(this.input.value,this.root),this.root.classList.toggle(`is-filled`,this.input.value.length>0),this.paint(),this.dispatchEvent(new Event(`change`))}paint(){let e=this.reading,t=this.current(),n=e?e.note?`note:${e.note}`:`${e.kinds.join()}:${t}:${+!!e.pending}`:``;if(n===this.shown)return;let r=!!e&&e.kinds.length>1&&this.shown.split(`:`)[0]===n.split(`:`)[0];if(this.shown=n,!e||e.pending&&!e.kinds.length){this.kind.className=`reply__kind`,this.kind.innerHTML=``;return}if(e.note)return this.showNote(e.note);if(r){for(let e of this.kind.querySelectorAll(`[data-kind]`)){let n=e.dataset.kind===t;e.classList.toggle(`is-on`,n),e.setAttribute(`aria-pressed`,String(n))}return}let i=Ku(cf,this.root),a=e.kinds.length>1,o=e.kinds.map(n=>{let r=n===t,o=`<svg viewBox="0 0 24 24" aria-hidden="true">${of[n]}</svg>`,s=`<span class="reply__name">${i.names[n]}</span>`;return a?`<button type="button" class="reply__option${r?` is-on`:``}" data-kind="${n}" aria-pressed="${r}" aria-label="${i.replyVia} ${i.names[n]}" title="${i.names[n]}">${o}${s}</button>`:`<span class="reply__option is-on${e.pending?` is-pending`:``}">${o}${e.pending?``:s}</span>`}).join(``);this.kind.className=`reply__kind`,this.kind.innerHTML=`${e.pending?``:`<span class="reply__via">${i.via}</span>`}${o}`,this.kind.offsetWidth,this.kind.classList.add(`is-in`),a&&this.kind.classList.add(`is-choice`),e.kinds.length>2&&this.kind.classList.add(`is-many`)}showNote(e){this.shown=`note:${e}`,this.kind.className=`reply__kind`,this.kind.innerHTML=`<span class="reply__note">${e}</span>`,this.kind.offsetWidth,this.kind.classList.add(`is-in`)}turn(e){if(this.next||=e+af.every,e<this.next||(this.next=e+af.every,this.input.value||!this.enabled))return;let t=Ku(af.examples,this.root);this.shownExample=t[(t.indexOf(this.shownExample)+1)%t.length],pd(this.example,this.shownExample)}},hf={rise:1.6,stagger:.07},gf={en:{title:e=>[`Thanks,`,`${e}.`],reply:`I’ll reply within a day`,to:{email:`to`,phone:`at`,other:`on`},again:`Write another`},uk:{title:e=>[`Дякую,`,`${e}.`],reply:`Відповім протягом дня`,to:{email:`на`,phone:`на`,other:`у`},again:`Написати ще`}},_f={telegram:`Telegram`,whatsapp:`WhatsApp`,viber:`Viber`,instagram:`Instagram`,linkedin:`LinkedIn`,facebook:`Facebook`,behance:`Behance`,dribbble:`Dribbble`};function vf(e,t){let n=Ku(gf,e),r=e.querySelector(`.contacts__form`),a=Array.from(r.querySelectorAll(`[data-contacts-fade]`)),s=document.createElement(`div`);s.className=`thanks`,s.setAttribute(`aria-live`,`polite`),s.innerHTML=`<h2 class="thanks__title film-title"></h2><p class="thanks__line"></p><button class="thanks__again" type="button"></button>`,r.after(s);let c=s.querySelector(`.thanks__title`),u=s.querySelector(`.thanks__line`),d=s.querySelector(`.thanks__again`);d.textContent=n.again;let f=!1,p=null,h=matchMedia(`(prefers-reduced-motion: reduce)`).matches,g=()=>Array.from(c.querySelectorAll(`[data-goo]`)),_=()=>hf.rise*$.rem,v=()=>{s.style.top=`${r.offsetTop}px`,s.style.height=`${r.offsetHeight}px`},y=(e,t)=>{c.replaceChildren();for(let t of n.title(e)){let e=document.createElement(`span`);e.dataset.goo=``,e.textContent=t,c.append(e,` `)}if(t){let e=t.kind===`email`?n.to.email:t.kind===`phone`?n.to.phone:`${n.to.other} ${_f[t.kind]??t.kind}`;u.textContent=`${n.reply} — ${e} ${t.text}`}else u.textContent=`${n.reply}.`},b=()=>{f=!1,p?.kill(),p=null,e.classList.remove(`is-thanked`),i.set(s,{autoAlpha:0}),i.set(a,{autoAlpha:1,y:0}),i.set([u,d],{autoAlpha:0,y:0}),g().forEach(l),r.inert=!1};return b(),d.addEventListener(`click`,()=>{p?.kill(),p=i.timeline({onComplete:()=>{b(),t.onAgain()}}).add(o(g(),1,0,{duration:.5,stagger:.04}),0).to([u,d],{autoAlpha:0,y:-.6*_(),duration:.4,ease:`power2.in`,stagger:.03},0).set(s,{autoAlpha:0}).fromTo(a,{autoAlpha:0,y:_()},{autoAlpha:1,y:0,duration:1,ease:`power3.out`,stagger:hf.stagger},.45)}),{get shown(){return f},reset:b,play(t,n){if(y(t,n),v(),f=!0,e.classList.add(`is-thanked`),r.inert=!0,p?.kill(),h)return i.set(a,{autoAlpha:0}),i.set([s,u,d],{autoAlpha:1}),g().forEach(e=>m(e,1)),Promise.resolve();p=i.timeline().to(a,{autoAlpha:0,y:-.6*_(),duration:.3,ease:`power2.in`,stagger:.02},0).set(s,{autoAlpha:1},.2).add(o(g(),0,1,{duration:.9,stagger:.07}),.2).fromTo([u,d],{autoAlpha:0,y:_()},{autoAlpha:1,y:0,duration:.8,ease:`power3.out`,stagger:hf.stagger},.35);let c=p;return new Promise(e=>void c.then(()=>e()))}}}var yf={fade:1.6,stagger:.07,follow:.12},bf={en:{send:{none:`Get in touch`,text:`Send message`,voice:`Send voice message`,video:`Send video message`},empty:`Write a few words, or record a voice or a video message`,noName:`Your name first — so I know who to answer`,failed:`Couldn’t send it. Try again in a moment`},uk:{send:{none:`Зв’язатися`,text:`Надіслати повідомлення`,voice:`Надіслати голосове`,video:`Надіслати відео`},empty:`Напишіть кілька слів або запишіть голосове чи відео`,noName:`Спершу ім’я — щоб я знав, кому відповідаю`,failed:`Не вдалося надіслати. Спробуйте ще раз за мить`}},xf={landing:location.pathname+location.search,referrer:document.referrer};async function Sf(e,t){let n=e.dataset.endpoint;if(!n||location.hostname===`localhost`||location.hostname===`127.0.0.1`)return;let r=new FormData;if(r.append(`form-name`,e.getAttribute(`name`)||`contact`),r.append(`name`,t.name),r.append(`contact_kind`,t.contact.kind),r.append(`reply`,t.contact.text),r.append(`contact_link`,t.contact.link),r.append(`kind`,t.kind),r.append(`message`,t.text),r.append(`duration`,String(Math.round(t.duration))),r.append(`website`,e.querySelector(`[name="website"]`)?.value??``),t.blob){let e=t.blob.type.includes(`mp4`)?`mp4`:t.blob.type.includes(`webm`)?`webm`:`bin`;r.append(`file`,t.blob,`${t.kind}.${e}`)}let o=t.blob?{method:`POST`,body:r}:{method:`POST`,headers:{'Content-Type':`application/x-www-form-urlencoded`},body:new URLSearchParams([...r.entries()].map(([a,b])=>[a,String(b)])).toString()};let i=await fetch(n,o);if(!i.ok)throw Error(`contacts: ${i.status}`)}function Cf(){let e=document.querySelector(`.contacts`),t=e?.querySelector(`.contacts__inner`),n=e?.querySelector(`[data-contacts-face]`),a=e?.querySelector(`.contacts__frame`),s=e?.querySelector(`[data-contacts-form]`);if(!e||!t||!n||!a||!s)return null;let c=Ku(bf,e),l=Array.from(e.querySelectorAll(`.contacts__liquid [data-goo]`)),u=Array.from(e.querySelectorAll(`[data-contacts-fade]`)),d=new rf(e.querySelector(`[data-composer]`)),f=new mf(e.querySelector(`[data-reply]`)),p=e.querySelector(`.contacts__name`),m=e.querySelector(`.contacts__send span`),h=e.querySelector(`[data-clock]`),g=new Intl.DateTimeFormat(Gu(e)===`uk`?`uk-UA`:`en-US`,{timeZone:`Asia/Manila`,hour:`numeric`,minute:`2-digit`,second:`2-digit`}),_=0,v=()=>h&&(h.textContent=g.format(new Date));v();let y={y:0,target:0,stop:null},b=()=>e.scrollHeight-e.clientHeight,x=t=>{y.stop||(y.y=y.target=e.scrollTop),y.target=Math.min(Math.max(y.target+t,0),b()),y.stop??=r((t,n)=>{y.y+=(y.target-y.y)*(1-(1-yf.follow)**(n/1e3*60)),Math.abs(y.target-y.y)<.3&&(y.y=y.target,y.stop?.(),y.stop=null),e.scrollTop=y.y})},S=[];e.addEventListener(`scroll`,()=>{e.classList.toggle(`is-scrolled`,e.scrollTop>1);for(let e of S)e()},{passive:!0});let C=()=>m.textContent=c.send[d.message?.kind??`none`];C(),d.addEventListener(`change`,C);let w=/[^\p{L}\p{M}\s'’.-]/gu,T=()=>{p.classList.remove(`is-wrong`),p.offsetWidth,p.classList.add(`is-wrong`)};p.maxLength=60,p.addEventListener(`input`,()=>{let e=p.value.replace(w,``);if(e===p.value)return p.classList.remove(`is-wrong`);let t=(p.selectionStart??e.length)-(p.value.length-e.length);p.value=e,p.setSelectionRange(t,t),T()});let E=vf(e,{onAgain:()=>e.querySelector(`.composer__text`)?.focus()}),D=`admin`in document.documentElement.dataset&&new URLSearchParams(location.search).has(`thanks`),O=!1;s.addEventListener(`submit`,async e=>{if(e.preventDefault(),O)return;if(d.recording&&await d.stop(),!p.value.trim()){T(),d.say(c.noName,!0),p.focus();return}let t=f.contact;if(!t){f.warn();return}let n=d.message;if(!n){d.say(c.empty,!0);return}O=!0;try{let e=d.send();await Sf(s,{name:p.value.trim(),contact:t,...n}),md(`generate_lead`,{message:n.kind,reply:t.kind}),await Promise.race([e,new Promise(e=>setTimeout(e,400))]),await E.play(p.value.trim(),t)}catch{d.say(c.failed,!0)}finally{O=!1}});let k=t=>{d.enabled=f.enabled=t,e.classList.toggle(`is-current`,t),t||(y.stop?.(),y.stop=null,e.scrollTop=0,e.classList.remove(`is-scrolled`),E.shown&&window.setTimeout(()=>!e.classList.contains(`is-current`)&&E.reset(),900)),t&&D&&(D=!1,window.setTimeout(()=>void E.play(p.value.trim()||`Anna`,f.contact??{kind:`telegram`,text:`@anna`,link:``}),2200)),t&&!_?(v(),_=window.setInterval(v,1e3)):!t&&_&&(clearInterval(_),_=0)};return k(!1),{strip:()=>n.getBoundingClientRect(),frame:e=>{Object.assign(a.style,{top:`${e.top}px`,right:`${e.right}px`,bottom:`${e.bottom}px`,left:`${e.left}px`});let t=n.getBoundingClientRect();a.style.opacity=String(Math.min(1,e.left/Math.max(t.left,1)*2.5))},show:()=>{e.classList.add(`is-shown`);let t=yf.fade*$.rem;return i.timeline().add(o(l,0,1,{duration:1.3,stagger:.09}),0).fromTo(u,{autoAlpha:0,y:t},{autoAlpha:1,y:0,duration:1,ease:`power3.out`,stagger:yf.stagger},.15)},hide:()=>(e.classList.remove(`is-current`,`is-scrolled`),i.timeline().add(o(l,1,0,{duration:.5,stagger:.04}),0).to(u,{autoAlpha:0,y:-.6*yf.fade*$.rem,duration:.4,ease:`power2.in`,stagger:.03},0).to(a,{opacity:0,duration:.3},0)),setActive:k,wheel:e=>x(e.deltaY*(e.deltaMode===1?100/6:e.deltaMode===2?innerHeight:1)),scrollBy:x,onScroll:e=>void S.push(e)}}var wf={width:.74,height:.8,bottom:-1,radius:0,frame:0,dim:.55,shadow:0,rate:5,band:.3},Tf=`
  uniform sampler2D peekMap;
  uniform float uPeek;
  uniform float uHasPeek;
  uniform float uPeekAspect;
  uniform float uPeekFrame;
  uniform vec4 uPeekShape;
  uniform float uPeekDim;
  uniform float uPeekShadow;
  vec3 peekOver(vec3 c, vec2 frame, float aspect, vec3 empty) {
    if (uPeek <= 0.001) return c;
    float own = uPeekFrame > 0.0 ? uPeekFrame : uPeekAspect;
    float w = uPeekShape.x;
    float h = w * aspect / own;
    if (h > uPeekShape.y) { w *= uPeekShape.y / h; h = uPeekShape.y; }
    float rest = uPeekShape.z < 0.0 ? (1.0 - h) * 0.5 : uPeekShape.z;
    float bottom = mix(-h - 0.06, rest, uPeek);
    vec2 mid = vec2(0.5, bottom + h * 0.5);
    vec2 p = (frame - mid) * vec2(aspect, 1.0);
    vec2 q = abs(p) - vec2(w * 0.5 * aspect, h * 0.5) + uPeekShape.w;
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uPeekShape.w;
    float inside = 1.0 - smoothstep(-0.0025, 0.0025, d);
    float shade = uPeekDim * uPeek + (1.0 - smoothstep(0.0, 0.08, d)) * uPeekShadow * uPeek;
    c *= 1.0 - shade;
    vec2 cuv = (frame - (mid - vec2(w, h) * 0.5)) / vec2(w, h);
    vec2 crop = uPeekAspect > own ? vec2(own / uPeekAspect, 1.0) : vec2(1.0, uPeekAspect / own);
    cuv = 0.5 + (cuv - 0.5) * crop;
    vec3 film = uHasPeek > 0.5 ? texture2D(peekMap, cuv).rgb : empty;
    return mix(c, film, inside);
  }
`,Ef=e=>({peekMap:{value:null},uPeek:{value:0},uHasPeek:{value:0},uPeekAspect:{value:16/9},uPeekFrame:{value:e.frame??0},uPeekShape:{value:new nn(e.width,e.height,e.bottom,e.radius)},uPeekDim:{value:e.dim},uPeekShadow:{value:e.shadow??.3}}),Df=null;function Of(e){Df||(Df=document.createElement(`div`),Df.setAttribute(`aria-hidden`,`true`),Df.style.cssText=`position:fixed;left:0;top:0;width:4px;height:4px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:-1`,document.body.append(Df));let t=document.createElement(`video`);return t.style.cssText=`display:block;width:4px;height:4px`,t.muted=t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute(`muted`,``),t.setAttribute(`playsinline`,``),t.preload=`auto`,t.crossOrigin=`anonymous`,t.src=e,Df.append(t),t}function kf(e){e.pause(),e.removeAttribute(`src`),e.load(),e.remove()}var Af=new WeakSet,jf=new Set,Mf=!1;function Nf(e){!e.paused||Af.has(e)||jf.has(e)||(Af.add(e),e.play().then(()=>Af.delete(e),t=>{Af.delete(e),t?.name===`NotAllowedError`&&(jf.add(e),!Mf&&(Mf=!0,addEventListener(`pointerdown`,()=>{Mf=!1;for(let e of jf)e.play().catch(()=>void 0);jf.clear()},{once:!0,capture:!0})))}))}var Pf=class e{src;amount=0;video=null;texture=null;aspect=16/9;constructor(e){this.src=e}static of(t){return t&&!n?new e(t):null}step(e,t){e&&!this.video&&this.load();let n=this.texture?e:0;this.amount+=(n-this.amount)*(1-Math.exp(-wf.rate*t)),Math.abs(this.amount-n)<.001&&(this.amount=n);let r=this.video;r&&(e||this.amount>.01?Nf(r):r.paused||r.pause())}apply(e,t=!0){let n=t?this.amount:0;e.uPeek.value=n*n*(3-2*n),e.peekMap.value=this.texture,e.uHasPeek.value=+!!this.texture,e.uPeekAspect.value=this.aspect}signature(e){e(this.amount),this.video&&!this.video.paused&&e(this.video.currentTime)}load(){let e=Of(this.src);this.video=e,e.addEventListener(`loadeddata`,()=>{let t=new Ci(e);t.colorSpace=``,t.minFilter=x,t.magFilter=x,t.generateMipmaps=!1,this.texture=t,e.videoWidth&&e.videoHeight&&(this.aspect=e.videoWidth/e.videoHeight)},{once:!0})}},Ff=matchMedia(`(hover: none)`).matches,If={wide:{left:2.4,width:124,right:0,top:8,fold:6.2,radius:9,gap:2.4,captionTop:1.2,text:1.5,line:2,next:14,nextPad:3.2,nextTitle:7.6,nextGap:4,nextShare:.42,end:8},narrow:{left:2,width:0,right:2,top:0,fold:6.2,radius:7,gap:0,captionTop:.8,text:1.3,line:1.8,next:8,nextPad:2,nextTitle:3.2,nextGap:1.6,nextShare:.5,end:12}},Lf=2.4/124,Rf=192,zf=30,Bf=.35,Vf=.001,Hf=1.5,Uf={roll:{fadeFrom:.45,fadeTo:1.45,blur:2,shade:.45,rise:.75},scroll:{sensitivity:1,follow:7,fling:.3},pull:{max:.05,speed:1.6,follow:.15,release:.05},parallax:{zoom:1.04,amount:.03},hover:{zoom:0,rate:7},peek:{width:.62,height:.66,bottom:.07,radius:.035,dim:.34,rate:6,band:.36},orbit:{yaw:1.6,pitch:1.2},lens:{wide:{amount:.025,start:.6,aberration:.005,edgeBlur:.8,motionBlur:1.2},narrow:{amount:.015,start:.85,aberration:.006,edgeBlur:.6,motionBlur:1}},enter:{rise:.45,stagger:.13},lift:.06,blank:.36},Wf=Uf,Gf=`
  uniform float uFold;
  uniform float uRadius;
  varying float vTurn;
  vec4 rolled(vec3 position) {
    vec4 p = modelMatrix * vec4(position, 1.0);
    float turn = min(max(p.y - uFold, 0.0) / uRadius, 3.0);
    vTurn = turn;
    if (turn > 0.0) {
      p.y = uFold + uRadius * sin(turn);
      p.z -= uRadius * (1.0 - cos(turn));
    }
    return p;
  }
`,Kf=`
  uniform vec2 uFade;
  uniform float uTurnBlur;
  uniform float uShade;
  uniform float uAlpha;
  varying float vTurn;
  float rollAlpha() { return uAlpha * (1.0 - smoothstep(uFade.x, uFade.y, vTurn)); }
  float rollShade() { return 1.0 - uShade * (1.0 - cos(min(vTurn, 1.5708))); }
`,qf=`
  uniform float uZoom;
  uniform float uShift;
  varying vec2 vUv;
  varying vec2 vFrame;
  void main() {
    vFrame = uv;
    vUv = 0.5 + (uv - 0.5) / uZoom + vec2(0.0, uShift);
    gl_Position = projectionMatrix * viewMatrix * rolled(position);
  }
`,Jf=`
  uniform sampler2D map;
  uniform sampler2D mapFrom;
  uniform float uHasMap;
  uniform float uShown;
  uniform float uMix;
  uniform float uTexAspect;
  uniform float uFromAspect;
  uniform float uAspect;
  uniform vec3 uColor;
  uniform float uBias;
  uniform float uPlay;
  uniform float uPlayHover;
  uniform float uPlayR;
  uniform vec2 uFramePx;
  uniform vec3 uSurface;
  uniform vec3 uInk;
  ${Tf}
  varying vec2 vUv;
  varying vec2 vFrame;
  vec2 cover(vec2 uv, float tex) {
    vec2 s = tex > uAspect ? vec2(uAspect / tex, 1.0) : vec2(1.0, tex / uAspect);
    return 0.5 + (uv - 0.5) * s;
  }
  float side(vec2 p, vec2 a, vec2 b) {
    vec2 n = normalize(vec2(b.y - a.y, a.x - b.x));
    return dot(p - a, n);
  }
  vec3 playOver(vec3 c, vec3 soft) {
    vec2 p = (vFrame - 0.5) * uFramePx;
    float d = length(p);
    float disc = 1.0 - smoothstep(uPlayR - 0.75, uPlayR + 0.75, d);
    float ring = 1.0 - smoothstep(0.0, 1.0, abs(d - uPlayR + 0.5));
    float k = uPlayR * 0.8 / 12.0;
    vec2 a = vec2(-2.0, -3.5) * k;
    vec2 b = vec2(4.0, 0.0) * k;
    vec2 e = vec2(-2.0, 3.5) * k;
    float t = max(max(side(p, a, b), side(p, b, e)), side(p, e, a));
    float tri = 1.0 - smoothstep(-0.6, 0.6, t);
    vec3 fill = mix(mix(soft, uSurface, 0.82), uInk, uPlayHover);
    fill = mix(fill, mix(fill, uInk, 0.2), ring * (1.0 - uPlayHover));
    vec3 o = mix(fill, mix(uInk, uSurface, uPlayHover), tri);
    return mix(c, o, disc * uPlay);
  }
  void main() {

    float bias = uBias + vTurn * uTurnBlur - 0.5;
    vec3 c = uColor;
    if (uHasMap > 0.5) c = mix(uColor, texture2D(map, cover(vUv, uTexAspect), bias).rgb, uShown);
    if (uMix < 1.0) c = mix(texture2D(mapFrom, cover(vUv, uFromAspect), bias).rgb, c, uMix);
    c = peekOver(c, vFrame, uAspect, uColor * 0.5);
    if (uPlay > 0.5) {
      vec3 soft = uHasMap > 0.5 ? mix(uColor, texture2D(map, cover(vUv, uTexAspect), bias + 3.0).rgb, uShown) : uColor;
      c = playOver(c, soft);
    }
    float a = rollAlpha();
    gl_FragColor = vec4(c * rollShade() * a, a);
  }
`,Yf=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * rolled(position);
  }
`,Xf=`
  uniform sampler2D map;
  uniform float uBias;
  varying vec2 vUv;
  void main() {
    vec4 t = texture2D(map, vUv, uBias + vTurn * uTurnBlur);
    float a = rollAlpha();
    gl_FragColor = vec4(t.rgb * rollShade(), t.a) * a;
  }
`,Zf=class{scene=new Wn;flow=-1;morph=1;source=null;active=!1;onNext;onOpen;entry=null;items=[];pool=[];host;geometry=new Ai(1,1,1,Rf);roll={uFold:{value:0},uRadius:{value:1},uFade:{value:new K},uTurnBlur:{value:0},uShade:{value:0}};blank=new Y;surface=new Y;ink=new Y;l=If.wide;narrow=!1;rem=10;W=1;H=1;P=1;dpr=1;scroll=0;goal=0;read=0;velocity=0;pull=0;pointer=null;hovered=null;drag=null;version=0;lead=0;fonts;tmp=new q;constructor(e){this.host=e,this.fonts=Promise.all([`450`,`500`].map(e=>document.fonts.load(`${e} 20px "TT Norms Pro"`))).catch(()=>void 0),this.paint(),du(()=>{this.paint(),this.fonts.then(()=>this.drawCaptions())})}get colors(){return this.narrow?su.current:nu}paint(){let e=new Y().setStyle(this.colors.bg,Ye),t=new Y().setStyle(this.colors.fg,Ye);this.blank.copy(e).lerp(t,Wf.blank),this.surface.copy(e),this.ink.copy(t),this.version++}get current(){return this.entry}get drawn(){return!!this.entry&&this.flow<1&&(this.flow>-1||!!this.source)}get weight(){if(!this.drawn)return 0;let e=1-G.clamp(Math.abs(this.flow),0,1);return this.source&&this.flow<=0?Math.max(e,this.morph):e}get motion(){return Math.min(Math.abs(this.velocity)/this.H/3,1)}get atTop(){return this.goal<1&&this.scroll<1}get scrolled(){return this.scroll}get target(){return this.goal}get pointing(){return this.hovered!==null}get zooming(){return!!this.hovered?.media&&this.hovered.media.kind!==`embed`}get count(){return this.items.filter(e=>e.media).length}pointOf(e,t,n){let r=this.items.filter(e=>e.media)[e];if(!r)return null;let i=this.topAt(r)-this.scroll,a=this.tmp.set(r.x+t*r.w-this.W/2,this.H/2-(i+n*r.h),-(this.pull/(1-this.pull))*this.P).project(this.host.camera);return{x:(a.x+1)/2*this.W,y:(1-a.y)/2*this.H}}get frame(){let e=this.pointOf(0,0,0),t=this.pointOf(0,1,0);return e&&t&&t.x!==e.x?{x:e.x,y:e.y,w:t.x-e.x}:null}get scrollMark(){let e=this.items.filter(e=>e.media);if(!e.length)return[0,0];let t=this.topAt(e[0]),n=0;return e.forEach((e,r)=>{this.topAt(e)-t<=this.scroll+.5&&(n=r)}),[n,(this.scroll-(this.topAt(e[n])-t))/Math.max(e[n].h,1)]}scrollToMark(e,t){let n=this.items.filter(e=>e.media),r=n[e];r&&(this.goal=this.clamp(this.topAt(r)-this.topAt(n[0])+t*r.h))}scrollPointTo(e,t){this.goal=this.clamp(this.scroll+e-t)}scrollToItem(e){let t=this.items.filter(e=>e.media),n=t[e];n&&(this.goal=this.clamp(e===0?0:this.topAt(n)-this.topAt(t[0])))}setEntry(e){if(e===this.entry)return this.reset(),this.hovered=null,this.firstLoaded();for(let e of this.items)this.drop(e);return this.entry=e,this.items=e.media.map(e=>this.take(e,e.aspect)),e.next?.work&&this.items.push(this.take(null,e.next.work.image.naturalWidth/e.next.work.image.naturalHeight||1.6)),this.items.forEach((e,t)=>e.media?.kind!==`video`&&this.load(e,t)),this.scroll=this.goal=this.velocity=this.pull=0,this.read=0,this.hovered=null,this.layout(),this.fonts.then(()=>this.drawCaptions()),this.firstLoaded()}warm(e){let t=e.media[0];if(!t||t.kind!==`image`&&t.kind!==`embed`||!t.src)return Promise.resolve();let n=new Image;return n.src=t.src,n.decode().catch(()=>void 0)}reset(){this.scroll=this.goal=this.velocity=this.pull=0,this.version++}resize(e,t,n,r,i,a){this.W=e,this.H=t,this.rem=n,this.P=r,this.dpr=a,this.narrow=i,this.l=i?If.narrow:If.wide,this.paint(),this.layout(),this.fonts.then(()=>this.drawCaptions())}setStory(e){Math.abs(e-this.lead)<.5||(this.lead=e,this.layout())}wheel(e){this.goal=this.clamp(this.goal+e*Wf.scroll.sensitivity)}key(e,t){let n=this.H*.8,r={ArrowDown:120,ArrowUp:-120,PageDown:n,PageUp:-n," ":t?-n:n,End:1/0,Home:-1/0}[e];return r!==void 0&&(this.goal=this.clamp(this.goal+(Number.isFinite(r)?r:Math.sign(r)*1e7)),!0)}hoverAt(e,t=0){this.pointer=e===null?null:{x:e,y:t}}press(e,t){this.drag={y:t,from:this.goal,moved:!1,t:performance.now(),last:t,v:0},this.pointer||={x:e,y:t}}move(e){let t=this.drag;if(!t)return;let n=e-t.y;Math.abs(n)>5&&(t.moved=!0);let r=performance.now();t.v=(t.last-e)/(Math.max(r-t.t,1)/1e3),t.t=r,t.last=e;let i=t.from-n,a=this.max();this.goal=i<0?i*Bf:i>a?a+(i-a)*Bf:i}release(e,t,n){let r=this.drag;if(this.drag=null,n&&(this.pointer=null),!r)return!1;if(r.moved){let e=performance.now()-r.t>80?0:r.v;return this.goal=this.clamp(this.goal+e*Wf.scroll.fling),!0}this.goal=this.clamp(this.goal);let i=this.items.find(n=>n.rect&&e>=n.rect.x0&&e<=n.rect.x1&&t>=n.rect.y0&&t<=n.rect.y1);return i&&!i.media&&this.entry?.next?this.onNext?.(this.entry.next):i?.media&&i.media.kind!==`blank`&&this.entry&&this.onOpen?.(this.entry.media.indexOf(i.media)),!1}update(e){let t=this.l,n=this.rem,r=this.H;this.drag||(this.goal=this.clamp(this.goal));let i=this.drag?zf:Wf.scroll.follow,a=this.scroll-this.goal,o=(this.velocity+i*a)*e,s=Math.exp(-i*e);if(this.scroll=this.goal+(a+o)*s,this.velocity=(this.velocity-o*i)*s,Math.abs(this.scroll-this.goal)<.05&&Math.abs(this.velocity)<1&&(this.scroll=this.goal,this.velocity=0),this.entry&&this.read<100){let e=this.max(),t=e>0?Math.floor((this.scroll+2)/e*4)*25:0;t>this.read&&(this.read=Math.min(t,100),md(`case_read`,{case:this.entry.slug,percent:this.read}))}let c=Wf.pull.max*(1-Math.exp(-Math.abs(this.velocity)/r/Wf.pull.speed)),l=c>this.pull?Wf.pull.follow:Wf.pull.release;this.pull+=(c-this.pull)*(1-(1-l)**(e*60)),Math.abs(c-this.pull)<1e-4&&(this.pull=c);let u=this.pull/(1-this.pull)*this.P,d=1+u/this.P,f=r/2-(t.fold+Wf.roll.rise*t.radius)*n,p=t.radius*n;this.roll.uFold.value=f,this.roll.uRadius.value=p,this.roll.uFade.value.set(Wf.roll.fadeFrom,Math.max(Wf.roll.fadeTo,Wf.roll.fadeFrom+.01)),this.roll.uTurnBlur.value=Wf.roll.blur,this.roll.uShade.value=Wf.roll.shade;let m=G.clamp(this.flow,-1,1),h=m>0?m*r*.9:0,g=m>0?1-G.smoothstep(m,.2,.8):1,_=Wf.enter.stagger,v=-u,y=this.active&&this.pointer&&!this.drag?this.pointer:null,b=this.rowsOnScreen(),x=null;this.items.forEach((t,i)=>{t.media?.kind===`video`&&t.media.src&&!t.video&&this.topAt(t)-this.scroll<r*Hf&&this.load(t,i);let a=i===0&&!!this.source&&m<=0,o=a&&this.morph<1,s=1;if(m<0){let e=G.clamp(b.indexOf(t.top),0,3);s=G.clamp((m+1-_*e)/(1-_*3),0,1)}let c=1-(1-s)**3,l=this.topAt(t)-this.scroll+(a?0:(1-c)*Wf.enter.rise*r)-h,u=l+t.h+t.captionH;if(!o&&(l>r+2||r/2-u-f>p*Wf.roll.fadeTo))return this.hide(t);let S=t.media?0:t.captionH,C=t.media?t.captionH:t.captionH+t.h,w=t.x+t.w/2-this.W/2,T=r/2-l-S-t.h/2,E=t.w,D=t.h,O=v,k=Wf.parallax.zoom,A=(.5-(l+S+t.h/2)/r)*Wf.parallax.amount,j=t.image.material.uniforms;if(j.uMix.value=1,a&&this.source){let e=this.source,t=G.clamp(this.morph,0,1),n=t<.5?4*t*t*t:1-(-2*t+2)**3/2;w=G.lerp(e.x,w,n),T=G.lerp(e.y,T,n),E=G.lerp(e.w,E,n),D=G.lerp(e.h,D,n),O=G.lerp(e.z,v,n)+Math.sin(Math.PI*n)*Wf.lift*this.P,k=G.lerp(e.zoom,k,n),A=G.lerp(e.shift,A,n),j.mapFrom.value=e.texture,j.uFromAspect.value=e.aspect,j.uMix.value=G.smoothstep(n,.15,.75)}t.image.position.set(w,T,O);let M=this.host.depthOf(t.image.position);if(M<=.005)return this.hide(t);let N=this.host.presence(M)*(a?1:G.smoothstep(s,0,.6))*g,ee=this.host.defocus(M,d)*6,P=+(t===this.hovered);t.hover+=(P-t.hover)*(1-Math.exp(-Wf.hover.rate*e)),Math.abs(t.hover-P)<Vf&&(t.hover=P);let F=t.hover*t.hover*(3-2*t.hover);if(t.texture&&t.shown<1&&(t.shown=Math.min(1,t.shown+e/.4)),t.image.visible=!0,t.image.scale.set(E,D,1),j.uAlpha.value=N,j.uBias.value=ee,j.uAspect.value=E/D,j.uZoom.value=k*(1+Wf.hover.zoom*F),j.uShift.value=A,j.uShown.value=t.shown,j.uPlay.value=+(t.media?.kind===`embed`),j.uPlayHover.value=F,j.uPlayR.value=Math.max(4.8*n,28)*(E/t.w),j.uFramePx.value.set(E,D),t.caption){let e=t.caption.material.uniforms;t.caption.visible=!!e.map.value&&!o;let n=t.capX+t.capW/2-this.W/2,i=S?r/2-l-C/2:T-t.h/2-t.captionH/2;t.caption.position.set(n,i,v),t.caption.scale.set(t.capW,C,1),e.uAlpha.value=N*(a?G.smoothstep(this.morph,.85,1):1),e.uBias.value=ee}if(t.rect=o?null:this.screenRect(Math.min(t.x,t.capX)-this.W/2,Math.max(t.w,t.capW),r/2-l,r/2-u,v,f),y&&t.rect&&t.media?.kind!==`blank`&&N>.5){let e=t.rect;y.x>=e.x0&&y.x<=e.x1&&y.y>=e.y0&&y.y<=e.y1&&(x=t)}if(this.playing(t,!!t.rect),t.media?.peek){let n=Math.abs(l+t.h/2-r/2)<r*Wf.peek.band/2,i=t.rect&&this.active&&(Ff?n:t===this.hovered)?1:0;i&&!t.peekVideo&&this.loadPeek(t);let a=t.peekTexture?i:0;t.peek+=(a-t.peek)*(1-Math.exp(-Wf.peek.rate*e)),Math.abs(t.peek-a)<Vf&&(t.peek=a);let o=t.peekVideo;o&&(i||t.peek>.01?Nf(o):o.paused||o.pause()),j.uPeek.value=t.peek*t.peek*(3-2*t.peek)}else j.uPeek.value=0}),this.hovered=x}signature(e){e(this.scroll),e(this.flow),e(this.morph),e(this.pull),e(this.version),e(this.lead);for(let t of this.items)e(t.hover),e(t.shown),e(t.peek),t.video&&!t.video.paused&&e(t.video.currentTime),t.peekVideo&&!t.peekVideo.paused&&e(t.peekVideo.currentTime)}firstLoaded(){let e=this.items[0];return!e||e.texture||!e.media||e.media.kind===`blank`?Promise.resolve():new Promise(t=>{let n=performance.now(),r=()=>e.texture||performance.now()-n>1500?t():setTimeout(r,50);r()})}topAt(e){return e.top+(this.narrow?this.lead:this.l.top*this.rem)}max(){let e=this.items[this.items.length-1];return e?Math.max(0,this.topAt(e)+e.h+e.captionH+this.l.end*this.rem-this.H):0}clamp(e){return G.clamp(e,0,this.max())}rowsOnScreen(){let e=[];for(let t of this.items)this.topAt(t)+t.h+t.captionH<this.scroll||e.includes(t.top)||e.push(t.top);return e}layout(){let e=this.l,t=this.rem,n=e.left*t,r=this.narrow?this.W-(e.left+e.right)*t:e.width*t,i=this.narrow?r*Lf:e.gap*t,a=0,o=0,s=this.items;for(;o<s.length;){let c=s[o];if(!c.media){a+=e.next*t-i,c.w=r*e.nextShare,c.h=c.w/c.aspect,c.x=n+r-c.w,c.top=a,c.capX=n,c.capW=r,c.captionH=e.nextPad*t,a+=c.h+c.captionH+i,o++;continue}let l=c.media?.span===`half`,u=l&&s[o+1]?.media?.span===`half`?[c,s[o+1]]:[c],d=l?(r-i)/2:r,f=0;u.forEach((r,o)=>{r.x=n+o*(d+i),r.top=a,r.w=d,r.h=d/r.aspect,r.captionH=r.lines.length?(e.captionTop+r.lines.length*e.line)*t:0,r.capW=d,r.capX=r.x,f=Math.max(f,r.h+r.captionH)}),a+=f+i,o+=u.length}this.goal=this.clamp(this.goal),this.scroll=this.clamp(this.scroll),this.version++}take(e,t){let n=this.pool.pop()??this.make();n.media=e,n.aspect=t,n.texture=null,n.video=null,n.shown=0,n.hover=0,n.peek=0,n.peekVideo=null,n.peekTexture=null,n.rect=null,n.section=e?.section??``;let r=this.entry?.next;n.lines=e?e.caption?[{text:e.caption,weight:450,dim:!0}]:[]:[{text:Ku({en:`Next project`,uk:`Наступний проєкт`}),weight:450,dim:!0},{text:r?.work?.title??r?.title??``,weight:500,dim:!1},{text:r?.work?.subtitle??``,weight:450,dim:!0}];let i=n.image.material.uniforms;return i.map.value=null,i.uHasMap.value=0,i.uMix.value=1,i.uColor.value=this.blank,i.uPeek.value=0,i.uHasPeek.value=0,i.peekMap.value=null,n}drop(e){this.hide(e),e.video&&kf(e.video),e.texture&&e.media&&e.texture.dispose(),e.texture=e.video=null,e.peekVideo&&kf(e.peekVideo),e.peekTexture?.dispose(),e.peekVideo=e.peekTexture=null,this.pool.push(e)}loadPeek(e){let t=e.media?.peek;if(!t)return;let n=Of(t);e.peekVideo=n,n.addEventListener(`loadeddata`,()=>{if(e.peekVideo!==n)return;let t=new Ci(n);t.colorSpace=``,t.minFilter=x,t.magFilter=x,t.generateMipmaps=!1,e.peekTexture=t;let r=e.image.material.uniforms;r.peekMap.value=t,r.uPeekAspect.value=n.videoWidth/n.videoHeight||16/9,r.uHasPeek.value=1,this.version++},{once:!0})}load(e,t){let n=(n,r)=>{if(!this.items.includes(e))return void(e.media&&n.dispose());e.texture=n;let i=e.image.material.uniforms;i.map.value=n,i.uHasMap.value=1,i.uTexAspect.value=r,t===0&&this.source&&(e.shown=1),this.version++};if(!e.media){let e=this.entry?.next?.work;e&&n(e.texture,e.image.naturalWidth/e.image.naturalHeight||1.6);return}let r=e.media,i=e=>{let t=new Image;return t.decoding=`async`,t.src=e,t.decode().then(()=>{let e=new tn(t);return e.colorSpace=``,e.minFilter=C,e.magFilter=x,e.wrapS=e.wrapT=g,e.needsUpdate=!0,{texture:e,aspect:t.naturalWidth/t.naturalHeight}},()=>null)};if((r.kind===`image`||r.kind===`embed`)&&r.src)i(r.src).then(e=>e&&n(e.texture,e.aspect));else if(r.kind===`video`&&r.src){let t=Of(r.src);e.video=t,r.poster&&i(r.poster).then(r=>{if(r){if(e.video!==t||e.texture)return void r.texture.dispose();n(r.texture,r.aspect)}}),t.addEventListener(`loadeddata`,()=>{if(e.video!==t)return;let r=new Ci(t);r.colorSpace=``,r.minFilter=x,r.magFilter=x,r.generateMipmaps=!1;let i=e.texture;n(r,t.videoWidth/t.videoHeight),i&&e.texture===r&&i.dispose()},{once:!0})}}playing(e,t){let n=e.video;n&&(t&&this.active?Nf(n):n.paused||n.pause())}hide(e){e.rect=null,e.image.visible=!1,e.caption&&(e.caption.visible=!1),this.playing(e,!1),e.peekVideo?.pause()}screenRect(e,t,n,r,i,a){let o=Math.min(n,a);if(r>=o)return null;let s=this.host.camera,c=1/0,l=1/0,u=-1/0,d=-1/0;for(let[n,a]of[[e,o],[e+t,o],[e,r],[e+t,r]]){let e=this.tmp.set(n,a,i).project(s),t=(e.x+1)/2*this.W,r=(1-e.y)/2*this.H;c=Math.min(c,t),u=Math.max(u,t),l=Math.min(l,r),d=Math.max(d,r)}return{x0:c,y0:l,x1:u,y1:d}}make(){let e=(e,t,n)=>new zi({vertexShader:Gf+e,fragmentShader:Kf+t,uniforms:{...this.roll,...n,uAlpha:{value:0}},transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1}),t=(e,t)=>{let n=new ci(this.geometry,e);return n.renderOrder=t,n.visible=!1,this.scene.add(n),n},n=this.pool.length+this.items.length;return{media:null,image:t(e(qf,Jf,{map:{value:null},mapFrom:{value:null},uHasMap:{value:0},uShown:{value:0},uMix:{value:1},uTexAspect:{value:1},uFromAspect:{value:1},uAspect:{value:1},uColor:{value:this.blank},uBias:{value:0},uZoom:{value:1},uShift:{value:0},uPlay:{value:0},uPlayHover:{value:0},uPlayR:{value:22},uFramePx:{value:new K(1,1)},uSurface:{value:this.surface},uInk:{value:this.ink},...Ef(Wf.peek)}),n*10),caption:t(e(Yf,Xf,{map:{value:null},uBias:{value:0}}),n*10+1),texture:null,aspect:1,video:null,shown:0,x:0,top:0,w:1,h:1,captionH:0,capW:1,capX:0,lines:[],section:``,hover:0,peek:0,peekVideo:null,peekTexture:null,rect:null}}drawCaptions(){let e=this.l,t=this.rem,n=Math.max(e.text*t,12),r=Math.max(e.line*t,n*1.25);for(let i of this.items){let a=i.caption.material.uniforms;if(a.map.value?.dispose(),a.map.value=null,!i.lines.length)continue;let o=document.createElement(`canvas`);o.width=Math.max(1,Math.round(i.capW*this.dpr)),o.height=Math.max(1,Math.round((i.media?i.captionH:i.captionH+i.h)*this.dpr));let s=o.getContext(`2d`);if(!s)continue;s.scale(this.dpr,this.dpr),s.textBaseline=`middle`,`letterSpacing`in s&&(s.letterSpacing=`${(-.03*n).toFixed(2)}px`);let c=lu(this.colors.fg);if(i.media){let a=e.captionTop*t+r/2;i.lines.forEach((e,t)=>{s.font=`${e.weight} ${n}px "TT Norms Pro", system-ui, sans-serif`,s.fillStyle=`rgba(${c},${e.dim?.6:1})`,s.fillText(e.text,0,a+t*r)})}else{let[a,o,l]=i.lines,u=e.nextPad*t,d=u+i.h,f=i.capW-i.w-e.nextGap*t;s.fillStyle=`rgba(${c},0.22)`,s.fillRect(0,0,i.capW,Math.max(1,t*.1)),s.font=`500 ${n*1.1}px "TT Norms Pro", system-ui, sans-serif`,s.fillStyle=`rgba(${c},0.8)`,s.fillText(a.text,0,u+n*.55),s.font=`${l.weight} ${n}px "TT Norms Pro", system-ui, sans-serif`,s.fillStyle=`rgba(${c},0.6)`,s.fillText(l.text,0,d-n*.6,f);let p=lu(this.colors.accent),m=e.nextTitle*t;s.font=`${o.weight} ${m}px "TT Norms Pro", system-ui, sans-serif`,`letterSpacing`in s&&(s.letterSpacing=`${(-.04*m).toFixed(2)}px`);let h=s.measureText(o.text).width+m*.72;h>f&&(m*=f/h,s.font=`${o.weight} ${m}px "TT Norms Pro", system-ui, sans-serif`,`letterSpacing`in s&&(s.letterSpacing=`${(-.04*m).toFixed(2)}px`));let g=d-(l.text?r:0)-m*.62;s.fillStyle=`rgb(${p})`,s.fillText(o.text,0,g);let _=m*.42,v=s.measureText(o.text).width+m*.3,y=g-_/2;s.strokeStyle=`rgb(${p})`,s.lineWidth=Math.max(1,m/16),s.lineCap=`round`,s.beginPath(),s.moveTo(v,y+_),s.lineTo(v+_,y),s.moveTo(v+_*.3,y),s.lineTo(v+_,y),s.lineTo(v+_,y+_*.7),s.stroke()}let l=new Ti(o);l.colorSpace=``,l.premultiplyAlpha=!0,l.minFilter=C,l.magFilter=x,a.map.value=l}this.version++}},Qf={wide:{cardW:64,edge:2.4,gap:3.2,top:22.5,fold:20,end:8,captionTop:1.4,text:2,line:2.6,rule:1.2,rowGap:4.6,frame:.9,cross:1.6,radius:9},narrow:{cardW:1/0,edge:2,gap:2.4,top:15,fold:13,end:10,captionTop:1.2,text:1.6,line:2.1,rule:1,rowGap:3.6,frame:.7,cross:1.2,radius:7}},$f=1.5,ep=600,tp=24,np=30,rp=.35,ip=.001,ap={roll:{fadeFrom:.4,fadeTo:1.4,blur:2.4,shade:.55},scroll:{sensitivity:1,follow:7,fling:.3},pull:{max:.07,speed:1.6,follow:.15,release:.05},parallax:{zoom:1.12,amount:.07},hover:{zoom:0,rate:7,spread:1.4},orbit:{yaw:3.2,pitch:2.2},lens:{wide:{amount:.1,start:.5,aberration:.05,edgeBlur:2,motionBlur:1.6},narrow:{amount:.03,start:.85,aberration:.015,edgeBlur:1,motionBlur:1.2}},enter:{rise:.45,stagger:.13}},op=ap,sp=matchMedia(`(hover: none)`).matches,cp=`
  uniform float uFold;
  uniform float uRadius;
  varying float vTurn;
  vec4 rolled(vec3 position) {
    vec4 p = modelMatrix * vec4(position, 1.0);
    float turn = min(max(p.y - uFold, 0.0) / uRadius, 3.0);
    vTurn = turn;
    if (turn > 0.0) {
      p.y = uFold + uRadius * sin(turn);
      p.z -= uRadius * (1.0 - cos(turn));
    }
    return p;
  }
`,lp=`
  uniform vec2 uFade;
  uniform float uTurnBlur;
  uniform float uShade;
  uniform float uAlpha;
  varying float vTurn;
  float rollAlpha() { return uAlpha * (1.0 - smoothstep(uFade.x, uFade.y, vTurn)); }
  float rollShade() { return 1.0 - uShade * (1.0 - cos(min(vTurn, 1.5708))); }
`,up=`
  uniform mat3 uvTransform;
  uniform float uZoom;
  uniform float uShift;
  varying vec2 vUv;
  varying vec2 vFrame;
  void main() {
    vFrame = uv;
    vec2 at = 0.5 + (uv - 0.5) / uZoom + vec2(0.0, uShift);
    vUv = (uvTransform * vec3(at, 1.0)).xy;
    gl_Position = projectionMatrix * viewMatrix * rolled(position);
  }
`,dp=`
  uniform sampler2D map;
  uniform float uBias;
  uniform float uAspect;
  varying vec2 vUv;
  varying vec2 vFrame;
  ${Tf}
  void main() {
    vec3 c = texture2D(map, vUv, uBias + vTurn * uTurnBlur).rgb;
    c = peekOver(c, vFrame, uAspect, c * 0.35) * rollShade();
    float a = rollAlpha();
    gl_FragColor = vec4(c * a, a);
  }
`,fp=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * rolled(position);
  }
`,pp=`
  uniform sampler2D map;
  uniform float uBias;
  uniform float uReveal;
  varying vec2 vUv;
  void main() {
    float r = clamp(uReveal, 0.0, 1.0);
    float relax = clamp((r - 0.65) / 0.35, 0.0, 1.0);
    float blur = 4.5 * pow(1.0 - r, 3.0);
    vec4 t = texture2D(map, vUv, uBias + blur + vTurn * uTurnBlur);
    float cut = clamp(t.a * mix(20.0, 1.0, relax) + mix(-8.0, 0.0, relax), 0.0, 1.0);
    float a = cut * rollAlpha();
    gl_FragColor = vec4(t.rgb / max(t.a, 1e-4) * rollShade() * a, a);
  }
`,mp=`
  void main() {
    gl_Position = projectionMatrix * viewMatrix * rolled(position);
  }
`,hp=`
  uniform vec3 uColor;
  void main() {
    float a = rollAlpha();
    gl_FragColor = vec4(uColor * a, a);
  }
`,gp=class{scene=new Wn;flow=-1;active=!1;ceiling=0;lifted=null;cards;list;host;aspect;geometry=new Ai(1,1,1,tp);roll={uFold:{value:0},uRadius:{value:1},uFade:{value:new K},uTurnBlur:{value:0},uShade:{value:0}};l=Qf.wide;columns=2;cardW=0;cardH=0;captionH=0;pitch=1;rem=10;W=1;H=1;P=1;dpr=1;scroll=0;goal=0;velocity=0;pull=0;pointer=null;hovered=null;middle=null;drag=null;version=0;fonts;tmp=new q;ink=new Y().setStyle(nu.fg,Ye);constructor(e,t,n){this.host=t,this.aspect=n,this.cards=e.map((e,t)=>this.makeCard(e,t)),this.list=this.cards,this.fonts=Promise.all([`450`,`500`].map(e=>document.fonts.load(`${e} 20px "TT Norms Pro"`))).catch(()=>void 0)}get foldAt(){let e=this.l;return Math.max(e.fold*this.rem,this.ceiling+($f+e.radius)*this.rem)}get topAt(){return this.foldAt+(this.l.top-this.l.fold)*this.rem}get drawn(){return this.flow>-1&&this.flow<1&&this.list.length>0}get weight(){return 1-G.clamp(Math.abs(this.flow),0,1)}get motion(){return Math.min(Math.abs(this.velocity)/this.H/3,1)}get atTop(){return this.goal<1&&this.scroll<1}get pointing(){return this.hovered!==null&&!this.hovered.work.soon}get filmWork(){return!this.active||!this.drawn?null:(sp?this.middle:this.hovered)?.work??null}get back(){return this.pull/(1-this.pull)*this.P}resize(e,t,n,r,i,a){this.W=e,this.H=t,this.rem=n,this.P=r,this.dpr=a,this.l=i?Qf.narrow:Qf.wide;let o=this.l;this.columns=!i||e>=ep?2:1;let s=(e-2*o.edge*n-(this.columns-1)*o.gap*n)/this.columns;this.cardW=Math.min(o.cardW*n,s),this.cardH=this.cardW/this.aspect,this.captionH=(o.captionTop+2*o.line+o.rule)*n,this.pitch=this.cardH+this.captionH+o.rowGap*n,this.goal=this.clamp(this.goal),this.scroll=this.clamp(this.scroll),this.fonts.then(()=>this.drawCaptions())}setWorks(e){this.list=e.map(e=>this.cards.find(t=>t.work===e)).filter(Boolean);for(let e of this.cards)this.list.includes(e)||this.hide(e);this.scroll=this.goal=this.velocity=this.pull=0,this.hovered=null,this.version++}wheel(e){this.goal=this.clamp(this.goal+e*op.scroll.sensitivity)}key(e,t){let n=this.H*.8,r={ArrowDown:this.pitch/2,ArrowUp:-this.pitch/2,PageDown:n,PageUp:-n," ":t?-n:n,End:1/0,Home:-1/0}[e];return r===void 0||r<0&&this.atTop?!1:(this.goal=this.clamp(this.goal+(Number.isFinite(r)?r:Math.sign(r)*1e7)),!0)}reveal(e){let t=this.list.findIndex(t=>t.work===e);t>=0&&(this.goal=this.clamp(Math.floor(t/this.columns)*this.pitch))}sourceOf(e){let t=this.list.find(t=>t.work===e);if(!t||!t.image.visible)return null;let n=t.image.material.uniforms,{x:r,y:i,z:a}=t.image.position;return{x:r,y:i,z:a,w:t.image.scale.x,h:t.image.scale.y,zoom:n.uZoom.value,shift:n.uShift.value}}hoverAt(e,t=0){this.pointer=e===null?null:{x:e,y:t}}press(e,t){this.drag={y:t,from:this.goal,moved:!1,t:performance.now(),last:t,v:0},this.pointer||={x:e,y:t}}move(e){let t=this.drag;if(!t)return;let n=e-t.y;Math.abs(n)>5&&(t.moved=!0);let r=performance.now();t.v=(t.last-e)/(Math.max(r-t.t,1)/1e3),t.t=r,t.last=e;let i=t.from-n,a=this.max();this.goal=i<0?i*rp:i>a?a+(i-a)*rp:i}release(e,t,n){let r=this.drag;if(this.drag=null,n&&(this.pointer=null),!r)return null;if(r.moved){let e=performance.now()-r.t>80?0:r.v;return this.goal=this.clamp(this.goal+e*op.scroll.fling),null}return this.goal=this.clamp(this.goal),this.hit(e,t)?.work??null}update(e){let t=this.l,n=this.rem,r=this.H;this.drag||(this.goal=this.clamp(this.goal));let i=this.drag?np:op.scroll.follow,a=this.scroll-this.goal,o=(this.velocity+i*a)*e,s=Math.exp(-i*e);this.scroll=this.goal+(a+o)*s,this.velocity=(this.velocity-o*i)*s,Math.abs(this.scroll-this.goal)<.05&&Math.abs(this.velocity)<1&&(this.scroll=this.goal,this.velocity=0);let c=op.pull.max*(1-Math.exp(-Math.abs(this.velocity)/r/op.pull.speed)),l=c>this.pull?op.pull.follow:op.pull.release;this.pull+=(c-this.pull)*(1-(1-l)**(e*60)),Math.abs(c-this.pull)<1e-4&&(this.pull=c);let u=this.back,d=1+u/this.P,f=r/2-this.foldAt,p=t.radius*n;this.roll.uFold.value=f,this.roll.uRadius.value=p,this.roll.uFade.value.set(op.roll.fadeFrom,Math.max(op.roll.fadeTo,op.roll.fadeFrom+.01)),this.roll.uTurnBlur.value=op.roll.blur,this.roll.uShade.value=op.roll.shade;let m=G.clamp(this.flow,-1,1),h=m>0?m*r*.9:0,g=m>0?1-G.smoothstep(m,.2,.8):1,_=Math.floor(Math.max(this.scroll-(t.top-t.fold)*n,0)/this.pitch),v=op.enter.stagger,y=-u,b=this.active&&this.pointer&&!this.drag?this.pointer:null,x=null,S=null,C=r*wf.band/2;this.list.forEach((i,a)=>{let o=Math.floor(a/this.columns),s=a%this.columns,c=1;if(m<0){let e=G.clamp(o-_,0,3);c=G.clamp((m+1-v*e)/(1-v*3),0,1)}let l=1-(1-c)**3,u=this.topAt+o*this.pitch-this.scroll+(1-l)*op.enter.rise*r-h,w=u+this.cardH+this.captionH,T=r/2-u,E=r/2-w;if(u>r+2||E-f>p*op.roll.fadeTo)return this.hide(i);let D=i.work===this.lifted,O=(s-(this.columns-1)/2)*(this.cardW+t.gap*n),k=O-this.cardW/2,A=T-this.cardH/2;i.image.position.set(O,A,y);let j=this.host.depthOf(i.image.position);if(j<=.005)return this.hide(i);let M=this.host.presence(j)*G.smoothstep(c,0,.6)*g,N=this.host.defocus(j,d)*6,ee=i.hover+=(+(i===this.hovered)-i.hover)*(1-Math.exp(-op.hover.rate*e));Math.abs(i.hover-+(i===this.hovered))<ip&&(i.hover=+(i===this.hovered));let P=ee*ee*(3-2*ee),F=i.image.material.uniforms;i.image.visible=!D,i.image.scale.set(this.cardW,this.cardH,1),F.uAlpha.value=M,F.uBias.value=N,F.uZoom.value=op.parallax.zoom*(1+op.hover.zoom*P),F.uShift.value=(.5-(u+this.cardH/2)/r)*op.parallax.amount,i.work.film?i.work.film.apply(F):F.uPeek.value=0;let I=Math.abs(u+this.cardH/2-r/2);!D&&M>.5&&I<C&&(C=I,S=i);let te=i.caption.material.uniforms;i.caption.visible=!!te.map.value,i.caption.position.set(O,T-this.cardH-this.captionH/2,y),i.caption.scale.set(this.cardW,this.captionH,1),te.uAlpha.value=M,te.uBias.value=N,te.uReveal.value=G.clamp((c-.15)/.85,0,1);let ne=E+.5;if(i.base.visible=!0,i.base.position.set(O,ne,y),i.base.scale.set(this.cardW,1,1),i.base.material.uniforms.uAlpha.value=M*.2,i.fill.visible=P>ip,i.fill.position.set(k+this.cardW*P/2,ne,y),i.fill.scale.set(Math.max(this.cardW*P,.001),1,1),i.fill.material.uniforms.uAlpha.value=M,this.placeFrame(i,O,A,y,P,M),i.rect=this.screenRect(k,T,E,y,f),b&&i.rect&&M>.5){let e=i.rect;b.x>=e.x0&&b.x<=e.x1&&b.y>=e.y0&&b.y<=e.y1&&(x=i)}}),this.hovered=x,this.middle=S}signature(e){e(this.scroll),e(this.flow),e(this.pull),e(this.version),e(this.ceiling),e(+!!this.lifted);for(let t of this.list)e(t.hover)}hit(e,t){return this.list.find(n=>n.rect&&e>=n.rect.x0&&e<=n.rect.x1&&t>=n.rect.y0&&t<=n.rect.y1)??null}max(){let e=Math.ceil(this.list.length/this.columns),t=this.topAt+e*this.pitch-this.l.rowGap*this.rem;return Math.max(0,t+this.l.end*this.rem-this.H)}clamp(e){return G.clamp(e,0,this.max())}hide(e){e.rect=null;for(let t of[e.image,e.caption,e.base,e.fill,...e.box,...e.crosses])t.visible=!1}placeFrame(e,t,n,r,i,a){let o=i>ip;for(let t of[...e.box,...e.crosses])t.visible=o;if(!o)return;let s=this.rem,c=this.cardW+2*this.l.frame*s,l=this.cardH+2*this.l.frame*s,[u,d,f,p]=e.box;u.position.set(t,n+l/2-.5,r),d.position.set(t,n-l/2+.5,r),f.position.set(t-c/2+.5,n,r),p.position.set(t+c/2-.5,n,r),u.scale.set(c,1,1),d.scale.set(c,1,1),f.scale.set(1,l,1),p.scale.set(1,l,1),e.box[0].material.uniforms.uAlpha.value=.2*a*i;let m=(1-i)*op.hover.spread*s,h=this.l.cross*s;for(let i=0;i<4;i++){let a=t+(i%2?1:-1)*(c/2+m),o=n+(i<2?1:-1)*(l/2+m),[s,u]=[e.crosses[i*2],e.crosses[i*2+1]];s.position.set(a,o,r),s.scale.set(h,1,1),u.position.set(a,o,r),u.scale.set(1,h,1)}e.crosses[0].material.uniforms.uAlpha.value=a*i}screenRect(e,t,n,r,i){let a=Math.min(t,i);if(n>=a)return null;let o=this.host.camera,s=1/0,c=1/0,l=-1/0,u=-1/0;for(let[t,i]of[[e,a],[e+this.cardW,a],[e,n],[e+this.cardW,n]]){let e=this.tmp.set(t,i,r).project(o),n=(e.x+1)/2*this.W,a=(1-e.y)/2*this.H;s=Math.min(s,n),l=Math.max(l,n),c=Math.min(c,a),u=Math.max(u,a)}return{x0:s,y0:c,x1:l,y1:u}}makeCard(e,t){let n=(e,t,n)=>new zi({vertexShader:cp+e,fragmentShader:lp+t,uniforms:{...this.roll,...n,uAlpha:{value:0}},transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1}),r=(e,n)=>{let r=new ci(this.geometry,e);return r.renderOrder=t*10+n,r.visible=!1,this.scene.add(r),r},i=()=>n(mp,hp,{uColor:{value:this.ink}}),a=r(n(up,dp,{map:{value:e.texture},uvTransform:{value:e.texture.matrix},uBias:{value:0},uZoom:{value:1},uShift:{value:0},uAspect:{value:this.aspect},...Ef(wf)}),0),o=r(n(fp,pp,{map:{value:null},uBias:{value:0},uReveal:{value:1}}),1),s=i(),c=i();return{work:e,image:a,caption:o,base:r(i(),2),fill:r(i(),3),box:Array.from({length:4},()=>r(s,4)),crosses:Array.from({length:8},()=>r(c,5)),hover:0,rect:null}}drawCaptions(){let e=this.l,t=this.rem,n=Math.max(e.text*t,13),r=Math.max(e.line*t,n*1.25),i=Math.max(1,Math.round(this.cardW*this.dpr)),a=Math.max(1,Math.round(this.captionH*this.dpr));for(let o of this.cards){let s=document.createElement(`canvas`);s.width=i,s.height=a;let c=s.getContext(`2d`);if(!c)continue;c.scale(this.dpr,this.dpr),c.textBaseline=`middle`,`letterSpacing`in c&&(c.letterSpacing=`${(-.06*n).toFixed(2)}px`);let l=e.captionTop*t+r/2;if(c.font=`500 ${n}px "TT Norms Pro", system-ui, sans-serif`,c.fillStyle=`rgb(${lu(nu.fg)})`,c.fillText(o.work.title,0,l),c.font=`450 ${n}px "TT Norms Pro", system-ui, sans-serif`,c.fillStyle=`rgba(${lu(nu.fg)},0.6)`,c.fillText(o.work.subtitle,0,l+r),!o.work.soon){let e=n*.42,t=this.cardW-e-1,i=l+r-e/2;c.strokeStyle=`rgba(${lu(nu.fg)},0.6)`,c.lineWidth=Math.max(1,n/16),c.beginPath(),c.moveTo(t,i),c.lineTo(t+e,i+e),c.moveTo(t+e*.35,i+e),c.lineTo(t+e,i+e),c.lineTo(t+e,i+e*.35),c.stroke()}let u=new Ti(s);u.colorSpace=``,u.premultiplyAlpha=!0,u.minFilter=C,u.magFilter=x;let d=o.caption.material.uniforms;d.map.value?.dispose(),d.map.value=u}this.version++}},_p={wide:{cardW:51.3,cardH:31.8,pitch:54.9,centerY:1.48,frameW:53,frameH:33.5,cross:1.6,frameZ:6},narrow:{cardW:30,cardH:18.6,pitch:32.4,centerY:1,frameW:31,frameH:19.6,cross:1.2,frameZ:4}},vp=_p.wide.cardW/_p.wide.cardH,yp=1,bp=4,xp=.15,Sp=1e-4,Cp=.6,wp={spring:{glide:4.7,drag:19.5},pull:{max:.335,speed:3.35,follow:.19,release:.04},wheel:{sensitivity:1,follow:6,settle:150,slow:1,threshold:60},lens:{amount:.65,start:.7,aberration:.029,edgeBlur:3.1,motionBlur:1.8},fly:{behind:1.76,x:-.5,y:-.5,base:0,perCard:0},orbit:{yaw:6.1,pitch:3.9},frame:{spread:3}},Tp=`
  uniform mat3 uvTransform;
  varying vec2 vUv;
  varying vec2 vFrame;
  void main() {
    vFrame = uv;
    vUv = (uvTransform * vec3(uv, 1.0)).xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ep=`
  uniform sampler2D map;
  uniform float uBias;
  uniform float uAlpha;
  uniform float uAspect;
  varying vec2 vUv;
  varying vec2 vFrame;
  ${Tf}
  void main() {
    vec3 c = texture2D(map, vUv, uBias).rgb;
    c = peekOver(c, vFrame, uAspect, c * 0.35);
    gl_FragColor = vec4(c * uAlpha, uAlpha);
  }
`,Dp=`
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Op=`
  uniform vec3 uColor;
  uniform float uAlpha;
  void main() {
    gl_FragColor = vec4(uColor * uAlpha, uAlpha);
  }
`,kp=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ap=`
  uniform sampler2D tStrip;
  uniform vec2  uCenter;
  uniform float uLens;
  uniform float uLensStart;
  uniform float uAberration;
  uniform float uEdgeBlur;
  uniform float uMotion;
  uniform float uFocus;
  varying vec2 vUv;

  vec4 tap(vec2 uv, float bias) {
    vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));
    return texture2D(tStrip, uv, bias) * inside.x * inside.y;
  }

  void main() {
    float ax = abs(vUv.x - 0.5) * 2.0;
    float e = max(ax - uLensStart, 0.0) / (1.0 - uLensStart);
    e *= e * e;
    float m = 1.0 + uLens * e;
    float bias = e * (uEdgeBlur + uMotion) + uFocus * 6.0;
    float ca = uAberration * e;
    vec2 d = vUv - uCenter;

    vec4 g = tap(uCenter + vec2(d.x, d.y / m), bias);
    vec4 r = tap(uCenter + vec2(d.x * (1.0 - ca * 0.5), d.y / (m * (1.0 + ca))), bias);
    vec4 b = tap(uCenter + vec2(d.x * (1.0 + ca * 0.5), d.y / (m * (1.0 - ca))), bias);
    gl_FragColor = vec4(r.r, g.g, b.b, max(max(r.a, g.a), b.a));
  }
`,jp=()=>Math.min(devicePixelRatio,$.narrow?3:2),Mp=class extends EventTarget{ready;focus=0;arrive=0;orbit=new K;get enabled(){return this.on}set enabled(e){let t=this.pointer;e&&!this.on&&t&&document.elementFromPoint(t.x,t.y)===this.canvas&&(this.mouse={...t},this.grid.hoverAt(t.x,t.y),this.caseSheet.hoverAt(t.x,t.y)),this.on=e}onFrame;view=`strip`;stripShown=1;mode=`portfolio`;settleView=()=>void 0;caseSheet;lifted=null;all;works;canvas;renderer;target;strip=new Wn;camera=new ha;slots=[];frame=new In;frameParts=[];crosses=[];post;postScene=new Wn;postCamera=new ga(-1,1,1,-1,0,1);rem=10;g=_p.wide;P=1e3;offset=0;goal=0;anchor=0;velocity=0;pull=0;activeIndex=-1;wheeling=!1;wheelAt=0;wheelFrom=0;wheelSum=0;drag=null;visible=!1;frameSig=[];needsRender=!0;stopFrames=null;lastTime=0;tmp=new q;grid;pointing=!1;mouse=null;pointer=null;on=!1;stripOver=null;ink=new Y().setStyle(nu.fg,Ye);constructor(e){super(),this.all=Array.from(e.querySelectorAll(`[data-work]`)).map(e=>{let t=e.querySelector(`img`),n=new tn(t);return n.colorSpace=``,n.minFilter=C,n.magFilter=x,n.wrapS=n.wrapT=g,{el:e,link:e.querySelector(`a`),slug:e.dataset.case??``,image:t,title:e.querySelector(`[data-title]`)?.textContent?.trim()??``,subtitle:e.querySelector(`[data-subtitle]`)?.textContent?.trim()??``,category:e.dataset.category??``,texture:n,film:Pf.of($.narrow&&e.dataset.peekPhone||e.dataset.peek),soon:e.dataset.soon??``}}),this.works=this.all,this.renderer=new Qc({alpha:!0,antialias:!1,depth:!1,powerPreference:`high-performance`}),this.renderer.outputColorSpace=Ye,this.renderer.setClearColor(0,0),this.renderer.autoClear=!1,this.canvas=this.renderer.domElement,this.canvas.className=`works__canvas`,e.prepend(this.canvas),this.target=new an(1,1,{depthBuffer:!1,generateMipmaps:!0,minFilter:C,magFilter:x}),this.camera.rotation.order=`YXZ`;let t=new Ai(1,1);for(let e=-4;e<=bp;e++){let e=new ci(t,Np(Tp,Ep,{map:{value:null},uvTransform:{value:null},uBias:{value:0},uAspect:{value:vp},...Ef(wf)}));this.slots.push(e),this.strip.add(e)}this.buildFrame(t),this.strip.add(this.frame),this.post=new ci(new Ai(2,2),new zi({vertexShader:kp,fragmentShader:Ap,uniforms:{tStrip:{value:this.target.texture},uCenter:{value:new K(.5,.5)},uLens:{value:0},uLensStart:{value:0},uAberration:{value:0},uEdgeBlur:{value:0},uMotion:{value:0},uFocus:{value:0}},depthTest:!1,depthWrite:!1})),this.postScene.add(this.post),this.grid=new gp(this.all,{camera:this.camera,depthOf:e=>this.depthOf(e),presence:e=>this.presence(e),defocus:(e,t)=>this.defocus(e,t)},vp),this.caseSheet=new Zf({camera:this.camera,depthOf:e=>this.depthOf(e),presence:e=>this.presence(e),defocus:(e,t)=>this.defocus(e,t)}),this.ready=Promise.all(this.all.map(e=>new Promise(t=>{let n=()=>{let n=()=>{this.fitTexture(e),t()};e.soon?Pp(e).then(n):n()};e.image.complete&&e.image.naturalWidth?n():(e.image.addEventListener(`load`,n,{once:!0}),e.image.addEventListener(`error`,()=>t(),{once:!0}))}))).then(()=>void 0),this.all.forEach(e=>{e.link.addEventListener(`focus`,()=>{this.mode===`portfolio`&&(this.view===`grid`?this.grid.reveal(e):this.goTo(this.works.indexOf(e)))}),e.link.addEventListener(`click`,t=>{t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||(t.preventDefault(),Ip(this,e))})}),this.canvas.addEventListener(`pointerdown`,this.onPointerDown),this.canvas.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(this.mouse={x:e.clientX,y:e.clientY},this.grid.hoverAt(e.clientX,e.clientY),this.caseSheet.hoverAt(e.clientX,e.clientY))}),this.canvas.addEventListener(`pointerleave`,()=>{this.mouse=null,this.grid.hoverAt(null),this.caseSheet.hoverAt(null)}),addEventListener(`pointermove`,this.onPointerMove),addEventListener(`pointerup`,this.onPointerUp),addEventListener(`resize`,this.resize),this.resize(),this.update(0)}get list(){return this.all}get active(){return this.works[this.activeIndex]}get gridFlow(){return this.grid.flow}set gridFlow(e){this.grid.flow=e}set gridCeiling(e){this.grid.ceiling=e}get atTop(){return this.mode===`case`?this.caseSheet.atTop:this.view!==`grid`||this.grid.atTop}scrollKey(e,t){return this.enabled?this.mode===`case`?this.caseSheet.key(e,t):this.view===`grid`&&this.grid.key(e,t):!1}lift(e){this.lifted=e;let t=e.image.naturalWidth/e.image.naturalHeight||vp;if(this.view===`grid`&&this.grid.drawn){let n=this.grid.sourceOf(e);return n&&{...n,texture:e.texture,aspect:t}}if(this.stripShown<=0)return null;let n=this.g.pitch*this.rem/2,r=this.slots.find(t=>t.visible&&t.material.uniforms.map.value===e.texture&&Math.abs(t.position.x)<n);if(!r)return null;let{x:i,y:a,z:o}=r.position;return{x:i,y:a,z:o,w:r.scale.x,h:r.scale.y,texture:e.texture,aspect:t,zoom:1,shift:0}}workOf(e){return this.all.find(t=>t.slug===e)}jumpTo(e){let t=this.works.indexOf(e);if(t<0){this.works=this.all,this.grid.setWorks(this.all);for(let e of document.querySelectorAll(`[data-filter]`))e.setAttribute(`aria-pressed`,String(e.dataset.filter===`all`));this.dispatchEvent(new Event(`unfilter`)),t=this.all.indexOf(e)}this.offset=this.goal=this.anchor=t,this.velocity=this.pull=0,this.stopWheel(),this.grid.reveal(e)}setVisible(e){e!==this.visible&&(this.visible=e,this.stopFrames?.(),this.stopFrames=null,e?(this.lastTime=0,this.update(0),this.resize(),this.stopFrames=r(this.tick)):(this.renderer.setSize(1,1,!1),this.target.setSize(1,1)))}project(e,t,n){let r=this.restDepth(n),i=new q(e*r,-t*r,n*this.rem),a=this.depthOf(i);return i.project(this.camera),{x:(i.x+1)/2*innerWidth,y:(1-i.y)/2*innerHeight,depth:a}}restDepth(e){return 1-e*this.rem/this.P}presence(e){return G.smoothstep(e,.06,.55)}defocus(e,t=1){return G.clamp(Math.abs(e-t)/t,0,1)}step(e){this.goal=Math.round(this.goal)+e,this.anchor=this.goal,this.stopWheel()}goTo(e){if(e<0||!this.works.length)return;let t=this.works.length,n=e-Fp(Math.round(this.goal),t);n>t/2&&(n-=t),n<-t/2&&(n+=t),this.step(n)}wheel(e){if(!this.enabled||!this.works.length)return;let t=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*(e.deltaMode===1?40:e.deltaMode===2?innerHeight:1);if(t){if(this.mode===`case`)return this.caseSheet.wheel(e.deltaY*(e.deltaMode===1?40:e.deltaMode===2?innerHeight:1));if(this.view===`grid`)return this.grid.wheel(t);this.wheeling||(this.wheeling=!0,this.wheelFrom=Math.round(this.goal),this.wheelSum=0),this.wheelSum+=t,this.wheelAt=performance.now(),this.goal+=t/(this.g.pitch*this.rem)*wp.wheel.sensitivity}}settleWheel(){this.stopWheel();let e=Math.sign(this.wheelSum),t=Math.round(this.goal);(t-this.offset)*e<0&&Math.abs(this.velocity)>wp.wheel.slow&&(t+=e),t===this.wheelFrom&&Math.abs(this.wheelSum)>=wp.wheel.threshold&&(t+=e),this.goal=this.anchor=t}stopWheel(){this.wheeling=!1}filter(e,t){let n=e===`all`?this.all:this.all.filter(t=>t.category===e);n.length&&n!==this.works&&t(()=>{this.works=n,this.grid.setWorks(n),this.offset=this.goal=this.anchor=0,this.velocity=this.pull=0,this.stopWheel(),this.activeIndex=-1})}buildFrame(e){let t=t=>{let n=new ci(e,Np(Dp,Op,{uColor:{value:this.ink}}));return n.userData.alpha=t,this.frameParts.push(n),n};for(let e=0;e<4;e++)this.frame.add(t(.2));for(let e=0;e<4;e++){let e=new In;e.add(t(1),t(1)),this.crosses.push(e),this.frame.add(e)}}layoutFrame(){let e=this.rem,t=this.g.frameW*e,n=this.g.frameH*e,[r,i,a,o]=this.frameParts;r.scale.set(t,1,1),r.position.set(0,n/2-.5,0),i.scale.set(t,1,1),i.position.set(0,-n/2+.5,0),a.scale.set(1,n,1),a.position.set(-t/2+.5,0,0),o.scale.set(1,n,1),o.position.set(t/2-.5,0,0);for(let t of this.crosses){let[n,r]=t.children;n.scale.set(this.g.cross*e,1,1),r.scale.set(1,this.g.cross*e,1)}this.frame.position.set(0,this.g.centerY*e,this.g.frameZ*e),this.frame.scale.setScalar((this.P-this.g.frameZ*e)/this.P)}settle(){let e=this.goal-this.anchor;this.goal=e>xp?Math.ceil(this.goal):e<-.15?Math.floor(this.goal):Math.round(this.goal),this.anchor=this.goal}onPointerDown=e=>{if(this.enabled&&e.button===0){if(this.mode===`case`){this.canvas.setPointerCapture(e.pointerId),this.canvas.classList.add(`is-dragging`),this.caseSheet.press(e.clientX,e.clientY);return}if(this.view===`grid`){this.canvas.setPointerCapture(e.pointerId),this.canvas.classList.add(`is-dragging`),this.grid.press(e.clientX,e.clientY);return}(e.pointerType!==`mouse`||this.stripAt(e.clientX,e.clientY))&&(this.drag={x:e.clientX,offset:this.goal,moved:!1,t:performance.now(),last:e.clientX,v:0},this.canvas.setPointerCapture(e.pointerId),this.canvas.classList.add(`is-dragging`))}};onPointerMove=e=>{e.pointerType===`mouse`&&(this.pointer={x:e.clientX,y:e.clientY}),this.grid.move(e.clientY),this.caseSheet.move(e.clientY);let t=this.drag;if(!t)return;let n=e.clientX-t.x;Math.abs(n)>5&&(t.moved=!0);let r=performance.now(),i=Math.max(r-t.t,1)/1e3;t.v=(e.clientX-t.last)/(this.g.pitch*this.rem)/i,t.t=r,t.last=e.clientX,this.goal=t.offset-n/(this.g.pitch*this.rem)};onPointerUp=e=>{if(this.mode===`case`){this.canvas.classList.remove(`is-dragging`),this.caseSheet.release(e.clientX,e.clientY,e.pointerType!==`mouse`);return}if(this.view===`grid`){this.canvas.classList.remove(`is-dragging`);let t=this.grid.release(e.clientX,e.clientY,e.pointerType!==`mouse`);t&&Ip(this,t);return}let t=this.drag;if(!t)return;if(this.drag=null,this.canvas.classList.remove(`is-dragging`),t.moved){this.goal-=Math.max(-1,Math.min(1,t.v*.2)),this.anchor=t.offset,this.settle();return}let n=this.stripAt(e.clientX,e.clientY);n&&n!==`row`&&(Math.abs(n.rel)<.5?Ip(this,n.work):this.step(Math.round(n.rel)))};stripAt(e,t){if(this.mode!==`portfolio`||this.view!==`strip`||this.stripShown<=0)return null;let n=!1;for(let r of this.slots){let{work:i,rel:a}=r.userData;if(!r.visible||!i||a===void 0)continue;let o=1/0,s=1/0,c=-1/0,l=-1/0,{x:u,y:d,z:f}=r.position,p=r.scale.x/2,m=r.scale.y/2;for(let[e,t]of[[-p,-m],[p,-m],[-p,m],[p,m]]){let n=this.tmp.set(u+e,d+t,f).project(this.camera),r=(n.x+1)/2*innerWidth,i=(1-n.y)/2*innerHeight;o=Math.min(o,r),c=Math.max(c,r),s=Math.min(s,i),l=Math.max(l,i)}if(!(t<s||t>l)&&(n=!0,e>=o&&e<=c))return{work:i,rel:a}}return n?`row`:null}fitTexture(e){let t=e.image.naturalWidth/e.image.naturalHeight,n=this.g.cardW/this.g.cardH;t>n?e.texture.repeat.set(n/t,1):e.texture.repeat.set(1,t/n),e.texture.offset.set((1-e.texture.repeat.x)/2,(1-e.texture.repeat.y)/2),e.texture.updateMatrix(),this.needsRender=!0,e.texture.needsUpdate=!0}resize=()=>{let e=innerWidth,t=innerHeight;if(this.g=$.narrow?_p.narrow:_p.wide,this.rem=$.rem,this.P=t*yp,this.visible){let n=jp();this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.target.setSize(Math.round(e*n),Math.round(t*n))}this.camera.fov=G.radToDeg(2*Math.atan(t/2/this.P)),this.camera.aspect=e/t,this.camera.near=1,this.camera.far=this.P*4,this.camera.updateProjectionMatrix();for(let e of this.slots)e.scale.set(this.g.cardW*this.rem,this.g.cardH*this.rem,1);this.layoutFrame(),this.grid.resize(e,t,this.rem,this.P,$.narrow,jp()),this.caseSheet.resize(e,t,this.rem,this.P,$.narrow,jp()),this.visible&&this.render()};placeCamera(e){let t=1-G.clamp(this.arrive,0,1),n=G.degToRad(this.orbit.x*e.yaw),r=G.degToRad(-this.orbit.y*e.pitch),i=this.P*(1-t*(1+wp.fly.behind));this.camera.rotation.set(-r,n,0);let a=this.tmp.set(0,0,1).applyEuler(this.camera.rotation),o=t*t;this.camera.position.set(wp.fly.x*innerWidth*o,-wp.fly.y*innerHeight*o,0).addScaledVector(a,i),this.camera.updateMatrixWorld()}update(e){this.wheeling&&performance.now()-this.wheelAt>wp.wheel.settle&&this.settleWheel();let t=this.drag?wp.spring.drag:this.wheeling?wp.wheel.follow:wp.spring.glide,n=this.offset-this.goal,r=(this.velocity+t*n)*e,i=Math.exp(-t*e);this.offset=this.goal+(n+r)*i,this.velocity=(this.velocity-r*t)*i,Math.abs(this.offset-this.goal)<1e-4&&Math.abs(this.velocity)<.001&&(this.offset=this.goal,this.velocity=0);let a=wp.pull.max*(1-Math.exp(-Math.abs(this.velocity)/wp.pull.speed)),o=a>this.pull?wp.pull.follow:wp.pull.release;this.pull+=(a-this.pull)*(1-(1-o)**(e*60)),Math.abs(a-this.pull)<Sp&&(this.pull=a);let s=this.pull/(1-this.pull)*this.P,c=1+s/this.P,l=G.clamp(this.stripShown,0,1),u=this.grid.drawn?this.grid.weight:0,d=this.caseSheet.drawn?this.caseSheet.weight:0,f=l+u+d,p=f>0?u/f:0,m=f>0?d/f:0,h=1-p-m,g=(e,t,n)=>e*h+t*p+n*m,_=Uf;this.placeCamera({yaw:g(wp.orbit.yaw,ap.orbit.yaw,_.orbit.yaw),pitch:g(wp.orbit.pitch,ap.orbit.pitch,_.orbit.pitch)});let v=1-G.clamp(this.arrive,0,1),y=(1-l)*(1-l)*Cp*this.P,b=this.works.length,x=Math.floor(this.offset),S=!this.drag&&!this.wheeling&&Math.abs(this.velocity)<.2&&Math.abs(this.offset-Math.round(this.offset))<.04,C=b&&this.enabled&&this.mode===`portfolio`&&this.view===`strip`&&l>=1&&S?this.works[Fp(Math.round(this.offset),b)]:null,w=this.grid.filmWork;for(let t of this.all)t.film?.step(+(t===C||t===w),e);this.slots.forEach((e,t)=>{let n=x+t-bp,r=b?this.works[Fp(n,b)]:void 0,i=n-this.offset;if(e.userData.work=r,e.userData.rel=i,!r||!l||r===this.lifted&&Math.abs(i)<.5)return void(e.visible=!1);let a=e.material.uniforms;a.map.value=r.texture,a.uvTransform.value=r.texture.matrix,r.film?r.film.apply(a,Math.abs(i)<.5):a.uPeek.value=0;let o=-v*this.P*(wp.fly.base+wp.fly.perCard*Math.abs(i))-s-y;e.position.set(i*this.g.pitch*this.rem,this.g.centerY*this.rem,o);let u=this.depthOf(e.position);e.visible=u>.005,a.uAlpha.value=this.presence(u)*l,a.uBias.value=this.defocus(u,c)*6+(1-l)*5});let T=Math.min(Math.abs(this.velocity)*.6,1),E=this.g.frameW*this.rem/2+T*wp.frame.spread*this.rem,D=this.g.frameH*this.rem/2+T*wp.frame.spread*this.rem;this.crosses[0].position.set(-E,D,0),this.crosses[1].position.set(E,D,0),this.crosses[2].position.set(-E,-D,0),this.crosses[3].position.set(E,-D,0),this.frame.position.z=this.g.frameZ*this.rem-y;let O=this.depthOf(this.frame.position);this.frame.visible=O>.005&&l>0;let k=this.presence(O)*l;for(let e of this.frameParts)e.material.uniforms.uAlpha.value=e.userData.alpha*k;let A=b?Fp(Math.round(this.offset),b):-1;A!==this.activeIndex&&(this.activeIndex=A,this.dispatchEvent(new Event(`change`))),this.grid.active=this.enabled&&this.mode===`portfolio`&&this.view===`grid`,this.grid.lifted=this.lifted,this.grid.drawn&&this.grid.update(e),this.caseSheet.active=this.enabled&&this.mode===`case`,this.caseSheet.drawn&&this.caseSheet.update(e);let j=this.mouse&&this.enabled&&!this.drag?this.stripAt(this.mouse.x,this.mouse.y):null,M=j===`row`?`row`:j?j.work.soon?`row`:`card`:null;M!==this.stripOver&&this.canvas.classList.toggle(`is-row`,(this.stripOver=M)===`row`);let N=this.grid.pointing||this.caseSheet.pointing||M===`card`;N!==this.pointing&&this.canvas.classList.toggle(`is-pointing`,this.pointing=N),this.canvas.classList.toggle(`is-zoom`,N&&this.caseSheet.zooming);let ee=wp.lens,P=ap.lens[$.narrow?`narrow`:`wide`],F=_.lens[$.narrow?`narrow`:`wide`],I=this.post.material.uniforms;I.uCenter.value.set(.5,.5+h*this.g.centerY*this.rem/innerHeight),I.uLens.value=g(ee.amount,P.amount,F.amount),I.uLensStart.value=Math.min(g(ee.start,P.start,F.start),.99),I.uAberration.value=g(ee.aberration,P.aberration,F.aberration),I.uEdgeBlur.value=g(ee.edgeBlur,P.edgeBlur,F.edgeBlur),I.uMotion.value=g(T*ee.motionBlur,this.grid.motion*P.motionBlur,this.caseSheet.motion*F.motionBlur),I.uFocus.value=this.focus,this.onFrame?.()}depthOf(e){return-this.tmp.copy(e).applyMatrix4(this.camera.matrixWorldInverse).z/this.P}render(){this.needsRender=!1;let e=this.renderer;if($.narrow&&this.stripShown<=0&&this.focus<=0&&(this.grid.drawn||this.caseSheet.drawn)){e.setRenderTarget(null),e.clear(),this.grid.drawn&&e.render(this.grid.scene,this.camera),this.caseSheet.drawn&&e.render(this.caseSheet.scene,this.camera);return}e.setRenderTarget(this.target),e.clear(),this.stripShown>0&&e.render(this.strip,this.camera),this.grid.drawn&&e.render(this.grid.scene,this.camera),this.caseSheet.drawn&&e.render(this.caseSheet.scene,this.camera),e.setRenderTarget(null),e.clear(),e.render(this.postScene,this.postCamera)}tick=e=>{let t=this.lastTime?Math.min((e-this.lastTime)/1e3,.1):0;this.lastTime=e,this.update(t),(this.frameChanged()||this.needsRender)&&this.render()};frameChanged(){let e=this.frameSig,t=0,n=!1,r=r=>{(t>=e.length||Math.abs(e[t]-r)>1e-4)&&(n=!0),e[t++]=r};for(let e of this.camera.matrixWorld.elements)r(e);for(let e of this.slots){let t=e.material.uniforms;r(+e.visible),r(e.position.x),r(e.position.z),r(t.uAlpha.value),r(t.uBias.value),r(t.map.value?.id??-1)}for(let e of this.all)e.film?.signature(r);for(let e of this.crosses)r(e.position.x);for(let e of this.frameParts)r(e.material.uniforms.uAlpha.value);r(this.stripShown),this.grid.drawn?this.grid.signature(r):r(-1),this.caseSheet.drawn?this.caseSheet.signature(r):r(-2);let i=this.post.material.uniforms;for(let e in i)typeof i[e].value==`number`&&r(i[e].value);return e.length=t,n}};function Np(e,t,n){return new zi({vertexShader:e,fragmentShader:t,uniforms:{...n,uAlpha:{value:1}},transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1})}async function Pp(e){let{naturalWidth:t,naturalHeight:n}=e.image,r=Math.min(1,1600/t),i=Math.round(t*r),a=Math.round(n*r),o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`);if(!s)return;let c=i*.018;if(`filter`in s)s.filter=`blur(${c.toFixed(1)}px)`,s.drawImage(e.image,-c*2,-c*2,i+c*4,a+c*4),s.filter=`none`;else{let t=e.image,n=i,r=a;for(;n>i/32;){let e=document.createElement(`canvas`);e.width=Math.max(1,Math.round(n/2)),e.height=Math.max(1,Math.round(r/2)),e.getContext(`2d`)?.drawImage(t,0,0,e.width,e.height),t=e,n=e.width,r=e.height}s.imageSmoothingQuality=`high`,s.drawImage(t,0,0,i,a)}s.fillStyle=`rgba(14,12,11,0.38)`,s.fillRect(0,0,i,a);let l=Math.round(i*.062),u=`500 ${l}px "TT Norms Pro", system-ui, sans-serif`;await Promise.race([document.fonts.load(u,e.soon),new Promise(e=>setTimeout(e,1500))]).catch(()=>{}),s.font=u,`letterSpacing`in s&&(s.letterSpacing=`${(-.06*l).toFixed(2)}px`),s.fillStyle=nu.fg,s.textAlign=`center`,s.textBaseline=`middle`,s.fillText(e.soon,i/2,a/2),e.texture.image=o,e.texture.needsUpdate=!0}var Fp=(e,t)=>(e%t+t)%t;function Ip(e,t){t.slug&&!t.soon&&e.dispatchEvent(new CustomEvent(`open`,{detail:t}))}var Lp=5e-4,Rp={x:0,y:0};function zp(){let e={x:0,y:0};if(matchMedia(`(pointer: coarse)`).matches)return;addEventListener(`pointermove`,t=>{t.pointerType!==`touch`&&(e.x=t.clientX/innerWidth*2-1,e.y=t.clientY/innerHeight*2-1)});let t=(document.querySelector(`.header`)??document.documentElement).style,n=``,i=``;r((r,a)=>{let o=1-.94**(a/1e3*60);Rp.x+=(e.x-Rp.x)*o,Rp.y+=(e.y-Rp.y)*o,Math.abs(e.x-Rp.x)<Lp&&Math.abs(e.y-Rp.y)<Lp&&(Rp.x=e.x,Rp.y=e.y);let s=Rp.x.toFixed(4),c=Rp.y.toFixed(4);s!==n&&t.setProperty(`--px`,n=s),c!==i&&t.setProperty(`--py`,i=c)})}var Bp=[`.portfolio__bar`,`.works__caption`],Vp=40,Hp=.04,Up=`portfolio:view`;function Wp(e){let t=document.querySelector(`[data-carousel]`);if(!t)return null;let n=new Mp(t);e.track(n.ready,2);let r=Bp.map(e=>({el:document.querySelector(e),last:{transform:``,opacity:``,filter:``}})),a=null;addEventListener(`resize`,()=>a=null);let s=(e,t,n)=>{e.last[t]!==n&&(e.el.style[t]=e.last[t]=n)};n.onFrame=()=>{if(n.orbit.set(Rp.x,Rp.y),!a){a=r.map(({el:e})=>e.offsetTop+e.offsetHeight/2-innerHeight/2);let e=r[0].el;e.closest(`.is-grid`)&&(n.gridCeiling=e.offsetTop+e.offsetHeight)}r.forEach((e,t)=>{let r=a[t],i=n.project(0,r,0),o=i.depth<=.005?0:n.presence(i.depth);if(i.depth<=.005)return s(e,`opacity`,`0`);let c=1/i.depth;s(e,`transform`,`translate(${(i.x-innerWidth/2).toFixed(2)}px, ${(i.y-innerHeight/2-r).toFixed(2)}px) scale(${c.toFixed(4)})`),s(e,`opacity`,o.toFixed(3));let l=Math.max(n.defocus(i.depth)-Hp,0)*Vp;s(e,`filter`,l>.3?`blur(${l.toFixed(1)}px)`:``)})};let c=document.querySelector(`[data-caption-title]`),l=document.querySelector(`[data-caption-subtitle]`),u={r:1},d=null,f=()=>{c.textContent=n.active?.title??``,l.textContent=n.active?.subtitle??``};f(),c?.closest(`.works__caption`)?.addEventListener(`click`,()=>{n.enabled&&n.view===`strip`&&n.active&&Ip(n,n.active)}),n.addEventListener(`change`,()=>{if(!n.enabled||n.view!==`strip`){f();return}d?.kill();let e=()=>{m(c,u.r),m(l,u.r)};d=i.timeline({onComplete:()=>d=null}).to(u,{r:0,duration:.3*u.r,ease:`none`,onUpdate:e}).add(f).to(u,{r:1,duration:.8,ease:`none`,onUpdate:e})});let p=Array.from(document.querySelectorAll(`[data-filter]`)),h=p.find(e=>e.getAttribute(`aria-pressed`)===`true`)?.dataset.filter??`all`,g=h,_=`strip`,v=null,y=null,b=!1,x=e=>{v=e.eventCallback(`onComplete`,()=>{v=y=null,b=!1,S()})},S=()=>{if(v)return void v.timeScale(2.5);_===n.view?h!==g&&C():A(_)},C=()=>{y=`out`;let e=()=>{y=`in`,g=h,n.filter(h,e=>e())},r=i.timeline();if(n.view===`grid`){let t=n.gridFlow;t<0?r.to(n,{gridFlow:-1,duration:.5*(1+t),ease:`power2.in`}):r.to(n,{gridFlow:1,duration:.6*(1-t),ease:`power2.in`}),r.add(e).set(n,{gridFlow:-1}).to(n,{gridFlow:0,duration:1.5,ease:`none`})}else r.to(n,{focus:.6,duration:.35,ease:`power2.in`}).to(t,{opacity:0,duration:.35,ease:`power2.in`},0).add(e).to(n,{focus:0,duration:.7,ease:`power3.out`}).to(t,{opacity:1,duration:.5,ease:`power2.out`},`<`);x(r)};n.addEventListener(`unfilter`,()=>h=g=`all`);for(let e of p)e.addEventListener(`click`,()=>{let t=e.dataset.filter??`all`;if(t!==h){h=t;for(let t of p)t.setAttribute(`aria-pressed`,String(t===e));y!==`out`&&(y===`in`&&_===n.view&&(v.kill(),v=y=null),S())}});let w=document.querySelector(`.portfolio`),T=Array.from(document.querySelectorAll(`[data-view]`)),E=Array.from(document.querySelectorAll(`.portfolio__bar [data-goo]`)),D=e=>{for(let t of T)t.setAttribute(`aria-pressed`,String(t.dataset.view===e))},O=e=>{n.view=e,w.classList.toggle(`is-grid`,e===`grid`),a=null,e===`strip`&&(f(),m(c,0),m(l,0))},k=null;try{k=localStorage.getItem(Up)}catch{}k===`grid`&&(D(`grid`),O(`grid`),n.stripShown=0,n.gridFlow=0),_=n.view;let A=e=>{b=!0;let t=i.timeline().add(o(E,1,0,{duration:.45,stagger:.02}),0);e===`grid`?t.add(o([c,l],1,0,{duration:.45,stagger:.04}),0).to(n,{stripShown:0,duration:.65,ease:`power2.in`},0).add(()=>O(`grid`),.45).fromTo(n,{gridFlow:-1},{gridFlow:0,duration:1.6,ease:`none`,immediateRender:!1},.5):t.to(n,{gridFlow:1,duration:.7,ease:`power2.in`},0).add(()=>O(`strip`),.5).to(n,{stripShown:1,duration:1.2,ease:`power3.out`},.55).add(o([c,l],0,1,{duration:1,stagger:.06}),.85).set(n,{gridFlow:-1}),x(t.add(o(E,0,1,{duration:.9,stagger:.04}),.6))};n.settleView=()=>{let e=v;if(e){if(v=y=null,e.eventCallback(`onComplete`,null),!b)return void e.progress(1);b=!1,e.kill(),n.view!==_&&O(_)}};for(let e of T)e.addEventListener(`click`,()=>{let t=e.dataset.view;if(t!==_){_=t,D(t);try{localStorage.setItem(Up,t)}catch{}S()}});return n}var Gp={delay:1.4};function Kp(){let e=document.querySelector(`.privacy`),n=e?.querySelector(`.privacy__sheet`);if(!e||!n)return;let r=Array.from(e.querySelectorAll(`.privacy__title [data-goo]`)),a=!1,o=!1,s=document.title,c=null,u=null,d=()=>{a||(a=!0,s=document.title,c=document.activeElement instanceof HTMLElement?document.activeElement:null,e.dataset.title&&(document.title=e.dataset.title),e.hidden=!1,n.scrollTop=0,document.documentElement.classList.add(`is-privacy`),u?.kill(),r.forEach(l),u=i.timeline().fromTo(e,{"--shade":0},{"--shade":1,duration:.6,ease:`power2.out`},0).fromTo(n,{xPercent:100},{xPercent:0,duration:.9,ease:`power3.out`},0).add(t(r,{duration:1,stagger:.08}),.35),n.focus({preventScroll:!0}))},f=()=>{a&&(a=!1,document.title===e.dataset.title&&(document.title=s),document.documentElement.classList.remove(`is-privacy`),u?.kill(),u=i.timeline({onComplete:()=>void(e.hidden=!0)}).to(n,{xPercent:100,duration:.6,ease:`power3.in`},0).to(e,{"--shade":0,duration:.5,ease:`power1.in`},.1),c?.focus({preventScroll:!0}))},p=()=>{if(a){if(o)return history.back();history.replaceState(null,``,ad(`contacts`)+location.search),f()}};for(let e of document.querySelectorAll(`[data-privacy]`))e.addEventListener(`click`,e=>{e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),!a&&(history.pushState({privacy:!0},``,id(td)+location.search),o=!0,d()))});addEventListener(`popstate`,()=>{if(!nd(location.pathname))return f();o=!!history.state?.privacy,d()}),e.querySelector(`.privacy__close`)?.addEventListener(`click`,p),e.addEventListener(`click`,e=>{n.contains(e.target)||p()}),document.addEventListener(`click`,e=>{let t=e.target?.closest(`[data-go]`);a&&t&&(t.dataset.go===`contacts`&&history.replaceState(null,``,ad(`contacts`)+location.search),f())},!0),addEventListener(`keydown`,e=>{a&&(e.stopPropagation(),e.key===`Escape`&&p())},!0),e.addEventListener(`wheel`,e=>{e.stopPropagation(),n.contains(e.target)||e.preventDefault()},{passive:!1});for(let t of[`touchstart`,`touchmove`,`touchend`])e.addEventListener(t,e=>e.stopPropagation(),{passive:!0});nd(location.pathname)&&setTimeout(d,Gp.delay*1e3)}var qp={delay:3.2},Jp=/^Europe\/(Kyiv|Kiev|Zaporozhye|Uzhgorod|Simferopol|Moscow|Minsk|Kirov|Samara|Saratov|Ulyanovsk|Volgograd|Astrakhan|Istanbul)$/,Yp=/^Atlantic\/(Canary|Madeira|Azores|Reykjavik|Faroe)$/,Xp=()=>{let e=Intl.DateTimeFormat().resolvedOptions().timeZone??``;return e.startsWith(`Europe/`)&&!Jp.test(e)||Yp.test(e)},Zp=(...e)=>window.gtag?.(...e);function Qp(){let e=location.hostname.replace(/^www\./,``);for(let t of document.cookie.split(`; `)){let n=t.split(`=`)[0];if(/^_ga/.test(n))for(let t of[``,`; domain=${e}`,`; domain=.${e}`])document.cookie=`${n}=; max-age=0; path=/${t}`}}function $p(){let e=document.querySelector(`.consent`);if(!e)return;let t=/(?:^|; )piven_consent=/.test(document.cookie),n=`admin`in document.documentElement.dataset,r=new URLSearchParams(location.search).has(`cookies`),i=0,a=()=>{window.clearTimeout(i),e.hidden=!1,requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add(`is-in`)))},o=()=>{e.classList.remove(`is-in`),i=window.setTimeout(()=>void(e.hidden=!0),700)},s=e=>{document.cookie=`piven_consent=${e}; max-age=31536000; path=/; SameSite=Lax${location.protocol===`https:`?`; Secure`:``}`,Zp(`consent`,`update`,{analytics_storage:e}),e===`denied`&&Qp(),o()};for(let t of e.querySelectorAll(`[data-consent]`))t.addEventListener(`click`,()=>s(t.dataset.consent===`granted`?`granted`:`denied`));for(let e of document.querySelectorAll(`[data-consent-open]`))e.addEventListener(`click`,a);(r||!n&&!t&&Xp())&&(i=window.setTimeout(a,qp.delay*1e3))}var em=class{total=0;done=0;listeners=new Set;get value(){return this.total?this.done/this.total:0}track(e,t=1){this.total+=t,this.emit();let n=()=>{this.done+=t,this.emit()};return e.then(n,n),e}onChange(e){this.listeners.add(e),e(this.value)}emit(){for(let e of this.listeners)e(this.value)}};function tm(e){for(let t of[`450 1em "TT Norms Pro"`,`500 1em "TT Norms Pro"`,`600 1em "TT Norms Pro"`,`600 1em "ZT Neue Ralewe"`])e.track(document.fonts.load(t));for(let t of Array.from(document.images))t.complete||t.loading===`lazy`||e.track(new Promise(e=>{t.addEventListener(`load`,e,{once:!0}),t.addEventListener(`error`,e,{once:!0})}));e.track(document.readyState===`complete`?Promise.resolve():new Promise(e=>addEventListener(`load`,()=>e(),{once:!0})))}i.registerPlugin(s);var nm=s.create(`arrowOut`,`0.25,1,0.5,1`),rm=s.create(`arrowInOut`,`0.76,0,0.24,1`),im=null;function am(e){if(!e)return void im?.pause();if(!document.querySelector(`.hero`)?.classList.contains(`is-current`))return;if(im)return void im.resume();let t=document.querySelector(`.hero__arrow path:first-child`);if(!t)return;if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return void i.set(t,{strokeDashoffset:0});let n=i.timeline({repeat:-1}).to(t,{strokeDashoffset:-1,duration:1.17,ease:rm,autoRound:!1}).set(t,{strokeDashoffset:1}).to(t,{strokeDashoffset:0,duration:1.17,ease:rm,autoRound:!1}).to({},{duration:.26});im=i.timeline().fromTo(t,{strokeDashoffset:1},{strokeDashoffset:0,duration:.9,ease:nm,autoRound:!1}).add(n,1.6)}var om=e=>Array.from(document.querySelectorAll(e)),sm={textAt:.3,duration:1.7,stagger:.15,headerAt:.5,scrollAt:.9};function cm(e){let t=t=>new Promise(n=>{if(!e)return n();e.addEventListener(t,()=>n(),{once:!0}),e.ready.catch(()=>n())});return{flight:t(`flight`),landed:t(`landed`),developing:t(`developing`),revealed:t(`revealed`)}}var lm=()=>om(`.preloader [data-goo]`),um=800;async function dm(){await Promise.race([document.fonts.load(`600 1em "TT Norms Pro"`,`Brian Fajardo`),new Promise(e=>setTimeout(e,um))]).catch(()=>{}),t(lm(),{duration:1.4,stagger:.12})}function fm(){let e=lm();e.length&&f(e,{duration:1,stagger:.08}).then(()=>document.querySelector(`.preloader`)?.remove())}function pm(e){let{textAt:n,duration:r,stagger:a,headerAt:o,scrollAt:s}=sm,c=i.timeline().add(t(om(`.header [data-goo]`),{duration:1,stagger:.07}),n+o);if(!e)return;let l=n+s+.15;c.add(t(om(`.hero__title [data-goo]`),{duration:r,stagger:a}),n).add(t(om(`.hero__scroll [data-goo]`),{duration:1}),n+s).add(()=>document.documentElement.classList.add(`is-ready`),l).add(()=>am(!0),l)}i.registerPlugin(s);var mm={speed:1.2,pullBack:.8,overlap:.08,filmRate:1.3,cut:.3,flyThrough:1.1,flyFilmAt:.4,flyBack:1.2,aboutLeave:1.5,filmSoft:.8,cutLead:.12},hm=1080,gm=s.create(`pullBack`,`0.3,0,0.15,1`),_m=220,vm={heroPortfolio:1.45,casePortfolio:1.3,aboutPortfolio:1.3},ym=60,bm=450,xm=e=>document.querySelector(e),Sm=e=>Array.from(document.querySelectorAll(e)),Cm=[`pointermove`,`pointerdown`,`touchstart`,`wheel`,`keydown`];function wm(e,t,n,a,s,c){let u=xm(`.hero`),d=xm(`.portfolio`),f=xm(`.case`),p=t?.caseSheet,m=xm(`.about`),h=xm(`.contacts`),g=xm(`.veil`),_={in:xm(`[data-film="hero-about"]`),out:xm(`[data-film="about-hero"]`)},v=od,y=sd,b=null,x=null,S=!1,C=!1,w=0,T=0,E=0,D=null,O=!1,k=!1,A=t=>e?.setRecede(t),j=t=>e?.setHandoff(t),M=e=>g.style.opacity=String(e),N=e=>t&&(t.arrive=e),ee=(e,t,n=1)=>e.add(o(Sm(`.hero__title [data-goo]`),1,0,{duration:n,stagger:.06}),t).add(o(Sm(`.hero__scroll [data-goo]`),1,0,{duration:.4}),0).add(Q(e=>i.set(`.hero__arrow`,{opacity:1-e}),{duration:.25,ease:`power1.out`}),0),P=i.timeline({paused:!0}).add(Q(A,{duration:1.6,ease:`power2.inOut`}),0).add(Q(M,{duration:1.2,ease:`power1.inOut`}),.2).add(Q(N,{duration:2,ease:`power3.out`}),.2).add(o(Sm(`.portfolio [data-goo]`),0,1,{duration:1,stagger:.06}),.95);ee(P,.6);let F=()=>{let e=i.timeline({paused:!0}).add(Q(j,{duration:mm.pullBack,ease:gm}),0);return ee(e,0,.7),e},I=F(),te=(e,t,n=1)=>new Promise(r=>{e.eventCallback(t?`onComplete`:`onReverseComplete`,()=>r()),e.timeScale(n*mm.speed),t?e.play():e.reverse()}),ne=(e,t)=>new Promise(n=>{let i=r(()=>{e.time()<t&&e.progress()<1||(i(),n())})}),re=[],L=(e,t,n)=>(re=[e].flat(),Promise.race([n,ne(re[0],t)])),ie=e=>(e.preload!==`auto`&&(e.preload=`auto`,e.load()),e.readyState>=4?Promise.resolve():new Promise(t=>{let n=()=>t();e.addEventListener(`canplaythrough`,n,{once:!0}),e.addEventListener(`error`,n,{once:!0}),setTimeout(n,6e3)})),ae=e=>new Promise(t=>{if(e.pause(),e.currentTime===0&&!e.seeking&&e.readyState>=2)return t();e.addEventListener(`seeked`,()=>t(),{once:!0}),setTimeout(t,3e3),e.currentTime=0}),oe=e=>{e.playbackRate=mm.filmRate,e.play().catch(()=>e.currentTime=e.duration||0)},se=(e,t)=>new Promise(n=>{let i=r(()=>{let r=(e.duration-e.currentTime)/(e.playbackRate||1);(e.ended||r<=t)&&(i(),n())})}),ce=(e,t)=>{let i=()=>{let r=$.narrow?n?.restingView():null;if(!r)return void(e.style.transform=``);let i=e.duration?Math.min(e.currentTime/e.duration,1):0,a=t?i:1-i,o=a*a*(3-2*a),s=.5+(r.cx-.5)*o,c=.5+(r.cy-.5)*o,l=1+(r.w-1)*o;e.style.transform=`translate(${((.5-s)/l*innerWidth).toFixed(2)}px, ${((.5-c)/l*innerHeight).toFixed(2)}px) scale(${(1/.94/l).toFixed(5)})`};i();let a=r(i);return()=>{a(),e.style.transform=``}},le=(e,t,n=mm.cut)=>new Promise(r=>i.to(e,{opacity:t,duration:n,ease:`none`,overwrite:!0,onComplete:r})),ue=()=>{let t=mm.filmSoft/hm;e&&(e.handoffSoftness=t),n?.scene&&(n.scene.handoffSoftness=t)},de=async(e=mm.cut,t=!1,r,i)=>{let a=i?null:()=>ce(_.in,!0);i??=()=>n?.enter(),await ie(_.in),await ae(_.in);let o=a?.();t&&oe(_.in),await le(_.in,1,e),t||oe(_.in),Nu(!1),u.classList.add(`is-hidden`),await r;let s=n?.prepare();ue(),await s,n?.run(!0),await se(_.in,mm.overlap),m.classList.add(`is-shown`);let c=i();await le(_.in,0),o?.(),ae(_.in),ie(_.out).then(()=>ae(_.out)),await c},fe=async e=>{let t=!e;e??=()=>n?.leave(mm.aboutLeave*mm.speed,mm.cutLead),await Promise.all([e(),ie(_.out).then(()=>ae(_.out))]);let r=t?ce(_.out,!1):null;await le(_.out,1,mm.cut),oe(_.out),m.classList.remove(`is-shown`),n?.run(!1),await se(_.out,mm.overlap),Nu(!0),le(_.out,0).then(()=>(_.out.classList.remove(`is-under`),r?.(),ae(_.out)))},pe=e=>{let[t,n]=e===`about`?[P,I]:[I,P];t.pause().progress(0),n.pause().progress(1)},me=async e=>{if(!n||!a)return;x?.kill(),x=n.toStrip(a.strip(),e,a.frame);let t=te(x,!0);await ne(x,xu.strip.focus*.55+(e===`about`?.15:0)),await Promise.all([a.show().timeScale(mm.speed).then(),t])},he=async e=>{if(!n||!a)return;a.hide().timeScale(mm.speed),x?.kill();let t=x=n.toStrip(a.strip(),e,a.frame,!0);await new Promise(e=>setTimeout(e,80));let r=te(t,!0).then(()=>{x===t&&(x=null),e===`about`&&n.atRest(),a.setActive(!1),h.classList.remove(`is-shown`)});e===`film`?await ne(t,t.duration()-mm.cutLead*mm.speed):await r},R=async()=>{u.classList.remove(`is-hidden`),await i.timeline().add(Q(e=>j(1-e),{duration:mm.pullBack*1.4,ease:`power2.inOut`}),0).add(o(Sm(`.hero__title [data-goo]`),0,1,{duration:1,stagger:.06}),.25).add(o(Sm(`.hero__scroll [data-goo]`),0,1,{duration:.6}),.5).add(Q(e=>i.set(`.hero__arrow`,{opacity:e}),{duration:.4,ease:`power1.out`}),.6).timeScale(mm.speed).then(),I.pause().progress(0)},ge=async(e,n=()=>o(Sm(`.portfolio [data-goo]`),1,0,{duration:.45,stagger:.03}))=>{_.in.classList.add(`is-under`);let r=i.timeline().add(Q(e=>N(1-e),{duration:mm.flyThrough,ease:`power2.in`}),0).add(n(),0).add(Q(e=>M(1-e),{duration:.6,ease:`power1.inOut`}),0).add(Q(j,{duration:.35,ease:`power2.out`}),0).add(Q(e=>A(1-e),{duration:.8,ease:`power2.inOut`}),.1).timeScale(mm.speed),a=r.then(()=>{t?.setVisible(!1),d.classList.remove(`is-shown`),_.in.classList.remove(`is-under`),z()});await ne(r,mm.flyFilmAt),await Promise.all([de(mm.cut,!0,a,e),a]),pe(`about`)},_e=async e=>{let n=fe(e);await se(_.out,mm.flyBack),_.out.classList.add(`is-under`),d.classList.add(`is-shown`),t?.setVisible(!0);let r=i.timeline().add(Q(N,{duration:1.8,ease:`power2.out`}),0).add(o(Sm(`.portfolio [data-goo]`),0,1,{duration:1,stagger:.06}),.7).timeScale(mm.speed);await n;let a=i.timeline({onComplete:()=>pe(`portfolio`)}).add(Q(A,{duration:1,ease:`power2.out`}),0).add(Q(e=>j(1-e),{duration:.7,ease:`power2.inOut`}),.6).add(Q(M,{duration:1,ease:`power1.inOut`}),.1).timeScale(mm.speed);await L([r,a],vm.aboutPortfolio,Promise.all([r.then(),a.then()]))},ve=()=>Sm(`.portfolio [data-goo]`);function z(){t&&p&&t.mode===`case`&&(t.mode=`portfolio`,t.lifted=null,p.flow=-1,p.source=null,p.morph=1,t.view===`grid`?t.gridFlow=0:t.stripShown=1,d.classList.remove(`is-case`),f.classList.remove(`is-shown`))}let ye=async e=>{if(!t||!p||!s)return;await s.open(e),t.settleView();let n=s.work(e);p.source=n?t.lift(n):null,p.morph=0,p.flow=-1,t.mode=`case`;let r=i.timeline().add(o(ve(),1,0,{duration:.45,stagger:.03}),0).add(()=>d.classList.add(`is-case`),.5);t.stripShown>0&&r.to(t,{stripShown:0,duration:.65*Math.min(t.stripShown*1.5,1),ease:`power2.in`},0);let a=t.gridFlow;a>=0&&a<1?r.to(t,{gridFlow:1,duration:.7*Math.max(1-a,.4),ease:`power2.in`},0).set(t,{gridFlow:-1}):a>-1&&a<0&&r.to(t,{gridFlow:-1,duration:.5*Math.max(1+a,.4),ease:`power2.in`},0),r.to(p,{morph:1,duration:1.3,ease:`none`},0).to(p,{flow:0,duration:1.6,ease:`none`},p.source?.35:.1).add(s.show(),.15),await r.timeScale(mm.speed).then()},be=async()=>{if(!t||!p||!s)return;p.source=null;let e=i.timeline().add(s.hide(),0).to(p,{flow:1,duration:.8,ease:`power2.in`},0).add(()=>{t.lifted=null,d.classList.remove(`is-case`)},.35);t.view===`grid`?e.fromTo(t,{gridFlow:-1},{gridFlow:0,duration:1.6,ease:`none`,immediateRender:!1},.5):e.to(t,{stripShown:1,duration:1.2,ease:`power3.out`},.45),e.add(o(ve(),0,1,{duration:1,stagger:.06}),.85).add(()=>{t.mode=`portfolio`,p.flow=-1,f.classList.remove(`is-shown`)},.85),await L(e.timeScale(mm.speed),vm.casePortfolio,e.then())},xe=async e=>{if(!t||!p||!s)return;p.source=null,s.warm(e),await i.timeline().add(s.textOut(),0).to(p,{flow:1,duration:.8,ease:`power2.in`},0).timeScale(mm.speed).then(),await s.open(e);let n=s.work(e);n&&(t.jumpTo(n),t.lifted=n),p.flow=-1,await i.timeline().to(p,{flow:0,duration:1.6,ease:`none`},0).add(s.textIn(),.2).timeScale(mm.speed).then()},Se={"hero>portfolio":async()=>{am(!1),d.classList.add(`is-shown`),t?.setVisible(!0),await L(P,vm.heroPortfolio,te(P,!0))},"portfolio>hero":async()=>{u.classList.remove(`is-hidden`),await te(P,!1,1.25),d.classList.remove(`is-shown`),t?.setVisible(!1)},"hero>about":async()=>{am(!1),I.kill(),I=F();let e=te(I,!0),t=mm.pullBack-mm.overlap*mm.speed;await Promise.all([ne(I,t),ie(_.in)]),await Promise.all([de(),e])},"about>hero":async()=>{await fe(),await R()},"portfolio>about":()=>ge(),"about>portfolio":()=>_e(),"about>contacts":()=>me(`about`),"contacts>about":()=>he(`about`),"hero>contacts":async()=>{am(!1),I.kill(),I=F();let e=te(I,!0),t=mm.pullBack-mm.overlap*mm.speed;await Promise.all([ne(I,t),ie(_.in)]),await Promise.all([de(mm.cut,!1,void 0,()=>me(`film`)),e])},"contacts>hero":async()=>{await fe(()=>he(`film`)),await R()},"portfolio>contacts":()=>ge(()=>me(`film`)),"contacts>portfolio":()=>_e(()=>he(`film`)),"portfolio>case":()=>ye(b),"case>portfolio":()=>be(),"case>case":()=>xe(b),"case>hero":async()=>{u.classList.remove(`is-hidden`);let e=i.timeline();s&&e.add(s.hide(),0),e.add(Q(e=>N(1-e),{duration:1.4,ease:`power3.in`}),0).add(Q(e=>A(1-e),{duration:1.6,ease:`power2.inOut`}),.25).add(Q(e=>M(1-e),{duration:1.2,ease:`power1.inOut`}),.45).add(o(Sm(`.hero__title [data-goo]`),0,1,{duration:1,stagger:.06}),.85).add(o(Sm(`.hero__scroll [data-goo]`),0,1,{duration:.6}),1.1).add(Q(e=>i.set(`.hero__arrow`,{opacity:e}),{duration:.4,ease:`power1.out`}),1.2).timeScale(mm.speed),await e.then(),P.pause().progress(0),d.classList.remove(`is-shown`),t?.setVisible(!1),z()},"case>about":()=>ge(void 0,()=>s?.hide()??i.timeline()),"case>contacts":()=>ge(()=>me(`film`),()=>s?.hide()??i.timeline())};async function Ce(e,n=!1,r=null){let i=O;if(O=!1,S&&C&&(D={to:e,fromHistory:n,slug:r}),!S||C||e===`case`&&!s?.has(r)||e===v&&(e!==`case`||r===y))return;let a=ad(e,r);document.title=e===`case`&&s?s.title(r):Yu(e)??Ee,!n&&location.pathname!==a&&history.pushState(null,``,a+location.search),C=!0;for(let e of re)e.isActive()&&e.progress(1);re=[],b=e===`case`?r:null,ue(),document.documentElement.dataset.screen=e,s?.setActive(!1),t&&(t.enabled=!1),u.classList.toggle(`is-current`,e===`hero`),we(e);let o=Se[`${v}>${e}`]?[e]:v===`case`||e===`case`?[`portfolio`,e]:[`hero`,e];for(let e of o)await Se[`${v}>${e}`](),v=e,y=e===`case`?r:null;Te(i)}function we(e){let t=e===`case`?`portfolio`:e;for(let e of Sm(`.nav__link`))e.classList.toggle(`is-current`,e.dataset.go===t)}function Te(e=!1){let n=v===`portfolio`||v===`case`;d.classList.toggle(`is-shown`,n),d.classList.toggle(`is-current`,n),m.classList.toggle(`is-current`,v===`about`),a?.setActive(v===`contacts`),s?.setActive(v===`case`),u.classList.toggle(`is-hidden`,v!==`hero`),am(v===`hero`),n||t?.setVisible(!1),C=!1,k=e&&performance.now()-w<_m,t&&(t.enabled=n);let r=rd(location.pathname),i=$u(location.pathname),o=D;D=null,r!==v||r===`case`&&i!==y?Ce(r,!0,i):o&&Ce(o.to,o.fromHistory,o.slug)}let Ee=document.title,De=ad(od,sd);location.pathname!==De&&!nd(location.pathname)&&history.replaceState(null,``,De+location.search),document.title=od===`case`&&s&&sd?s.title(sd):Yu(od)??Ee,v=od,document.documentElement.dataset.screen=od,u.classList.toggle(`is-current`,od===`hero`),u.classList.toggle(`is-hidden`,od!==`hero`),we(od);let Oe=cm(od===`about`||od===`contacts`?null:e);dm();let B=e=>e.add(Q(A,{duration:1.6,ease:`power2.inOut`}),.3).add(Q(M,{duration:1.2,ease:`power1.inOut`}),.5),ke={hero:async()=>{await Oe.developing,fm(),pm(!0),await Oe.revealed},portfolio:async()=>{let e=ld?t?.workOf(ld):void 0;e&&t?.jumpTo(e),await Oe.developing,fm(),pm(!1),d.classList.add(`is-shown`),t?.setVisible(!0),await B(i.timeline()).add(Q(N,{duration:2,ease:`power3.out`}),.5).add(o(Sm(`.portfolio [data-goo]`),0,1,{duration:1,stagger:.06}),1.25).timeScale(mm.speed).then(),P.pause().progress(1)},contacts:async()=>{if(!n)return Ae();Nu(!1),m.classList.add(`is-shown`),await n.prepare(c);let e=cm(n.scene);await e.developing,fm(),pm(!1),await e.landed,ue(),await me(`intro`),I.pause().progress(1),ie(_.out).then(()=>ae(_.out))},case:async()=>{if(!t||!p||!s||!sd)return Ae();let e=s.open(sd);await Oe.developing,fm(),pm(!1),await e;let n=s.work(sd);n&&(t.jumpTo(n),t.lifted=n),t.mode=`case`,t.stripShown=0,t.gridFlow=-1,p.source=null,p.flow=-1,d.classList.add(`is-shown`,`is-case`),t.setVisible(!0),await B(i.timeline()).add(Q(N,{duration:2,ease:`power3.out`}),.5).to(p,{flow:0,duration:1.6,ease:`none`},1.1).add(s.show(),1.2).timeScale(mm.speed).then(),P.pause().progress(1);for(let e of ve())l(e)},about:async()=>{if(!n)return;Nu(!1),m.classList.add(`is-shown`),await n.prepare(c);let e=cm(n.scene);await e.developing,fm(),pm(!1),await e.landed,ue(),await n.enter(!0),I.pause().progress(1),ie(_.out).then(()=>ae(_.out))}},Ae=async()=>{await Oe.developing,fm(),pm(!1),await B(i.timeline()).timeScale(mm.speed).then()};(ke[od]??Ae)().then(()=>{S=!0,document.documentElement.classList.remove(`is-intro`),document.documentElement.classList.add(`is-ready`);let e=()=>{for(let t of Cm)removeEventListener(t,e,!0);ie(_.in),ku()};for(let t of Cm)addEventListener(t,e,{capture:!0,passive:!0});s?.warm(),Te()}),addEventListener(`popstate`,()=>void Ce(rd(location.pathname),!0,$u(location.pathname))),t?.addEventListener(`open`,e=>{v===`portfolio`&&Ce(`case`,!1,e.detail.slug)}),p&&(p.onNext=e=>void Ce(`case`,!1,e.slug)),s&&(s.onOpen=e=>void Ce(`case`,!1,e),s.onBack=()=>void Ce(`portfolio`));let je=()=>{v===`contacts`&&!C&&a&&n?.fitStrip(a.strip(),a.frame)};addEventListener(`resize`,je),a?.onScroll(je),addEventListener(`wheel`,e=>{e.preventDefault();let r=performance.now(),i=r-w>_m,o=Math.abs(e.deltaY),c=Math.sign(e.deltaY);if(k&&(i||o>T*1.5+2||c&&c!==E)&&(k=!1),w=r,T=o,E=c||E,!(!S||C||k)){if(v===`hero`){e.deltaY>0&&i&&(O=!0,Ce(`portfolio`));return}v===`portfolio`||v===`case`&&!s?.wheel(e)?t?.wheel(e):v===`about`?n?.wheel(e):v===`contacts`&&a?.wheel(e)}},{passive:!1}),addEventListener(`keydown`,e=>{if(e.metaKey||e.ctrlKey||e.altKey||e.target?.closest?.(`input, textarea, select, [contenteditable="true"]`))return;let r=e.key;if(v===`hero`&&[`ArrowDown`,`PageDown`,` `].includes(r))e.preventDefault(),Ce(`portfolio`);else if(v===`portfolio`)!C&&t?.scrollKey(r,e.shiftKey)?e.preventDefault():[`ArrowUp`,`PageUp`,`Home`,`Escape`].includes(r)?(e.preventDefault(),Ce(`hero`)):(r===`ArrowRight`||r===`ArrowLeft`)&&(e.preventDefault(),t?.enabled&&t.step(r===`ArrowRight`?1:-1));else if(v===`case`&&!C)t?.scrollKey(r,e.shiftKey)?e.preventDefault():r===`Escape`&&(e.preventDefault(),Ce(`portfolio`));else if(v===`contacts`&&!C){let t=innerHeight*.8,n={ArrowDown:120,ArrowUp:-120,PageDown:t,PageUp:-t," ":e.shiftKey?-t:t,End:1e5}[r];n===void 0?[`Escape`,`Home`].includes(r)&&(e.preventDefault(),Ce(`hero`)):(e.preventDefault(),a?.scrollBy(n))}else if(v===`about`&&!C){let t=innerHeight*.8,i={ArrowDown:120,ArrowUp:-120,PageDown:t,PageUp:-t," ":e.shiftKey?-t:t,End:1e5}[r];i===void 0?[`Escape`,`Home`].includes(r)&&(e.preventDefault(),Ce(`hero`)):(e.preventDefault(),n?.scrollBy(i))}});let V=null;addEventListener(`touchstart`,e=>V={x:e.touches[0].clientX,y:e.touches[0].clientY,t:performance.now(),top:t?.atTop??!0},{passive:!0}),addEventListener(`touchend`,e=>{if(!V)return;let t=e.changedTouches[0].clientX-V.x,n=e.changedTouches[0].clientY-V.y,r=performance.now()-V.t<bm&&Math.abs(n)>Math.abs(t)*1.5,i=V.top;V=null,r&&(v===`hero`&&n<-60||v===`case`&&n>ym&&i)&&Ce(`portfolio`)},{passive:!0});for(let e of Sm(`[data-go]`))e.addEventListener(`click`,t=>{t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.button!==0||(t.preventDefault(),Ce(e.dataset.go))})}u(),a(),c(),document.documentElement.dataset.opened=od,bu(),d(),zp();var Tm=new em,Em=Pu(Tm,od!==`about`&&od!==`contacts`),Dm=Wp(Tm),Om=Pd(Dm),km=Ou(),Am=Cf();tm(Tm),wm(Em,Dm,km,Am,Om,Tm),Kp(),$p(),p();export{Vu as a,Hu as i,Bu as n,Uu as o,Wu as r,Ku as t};