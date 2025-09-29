'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5366519ae415242d9fe1811abaa39d93",
"version.json": "5f921f03f33062ab04c45234efaea966",
"index.html": "6b71291f21468331892417e12de6aadc",
"/": "6b71291f21468331892417e12de6aadc",
"main.dart.js": "e31aa421a76b3096f55c76ac1769249c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "947db8b52b600833342033db051159bd",
"icons/icon.png": "598d7f2b0f6b73d7615411ef1adfc430",
"icons/Icon-192.png": "6e8120b5a791020b98f9d6995e10d4ec",
"icons/Icon-maskable-192.png": "6e8120b5a791020b98f9d6995e10d4ec",
"icons/Icon-maskable-512.png": "bb7a138b9d0a3050a8b9c212dd05ccc9",
"icons/Icon-512.png": "bb7a138b9d0a3050a8b9c212dd05ccc9",
"manifest.json": "3a4009225b0767cf09a3e024474e54bd",
".git/config": "01cde159ac1c715bcb777145da2732c9",
".git/objects/0d/f121bce9026d22faae0e4b6e9382029d6b0269": "2e404120379e3a69def0fe10169449ed",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/92/fb5af57242b723e7eab6306a32ed202fea5a98": "8d51a9feabad4207fb1b4a2cdbec5115",
".git/objects/66/1bac5507d2ec65b2b5d7fd3d5e21c568032c18": "51ddfe3d44630311c37bac309b1e8e97",
".git/objects/50/f2d761ee9b11cea278a3ffae754a6b56c76f7a": "ba0d1a137c2426270df8ae6ee4a04d1f",
".git/objects/57/d709d130a3fe8fe41016e59108dc4d7b90c44d": "97c470f7c16b91e433db15b812404e56",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/d9a7a7b571bc3346e226dac41c12a12eb8d42d": "8bbb6e322930cba6be988dece9f7243d",
".git/objects/04/e3877313754fa01ed711cd374312ef7850cc8b": "b4354f141082b2763483f98a6db69bc7",
".git/objects/6a/76a8a2baf5fd578654e70a8e7539c4d34638ba": "e912cdc7a5007b36a1c6c222bb8c8ce0",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/3d/3847e4aa11473b542653b54382f4be8c6f47a5": "9a7f5d1d490bec12fc49d97160170e60",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/e0a4117daf17834f961424359d3ffe0d87f8d9": "e66c08b0df5093aea774fe7ff40dcded",
".git/objects/33/4c68fcf0fb9fe8c767d02782ff346c60a268a7": "2e9427a322a126d19a48f56f337439ef",
".git/objects/9c/e59aa8c1b90be22d5d58ba550de4f81a40af55": "d048509a615e4e86f68d1c360917e3b9",
".git/objects/a3/2b7feb725e8c06c9ae547b7adeffdbc8f65bce": "12812c454b2581f152d46176dee503ff",
".git/objects/a3/5910d51397b0eab2ec96ca81a1cf31aa138ba6": "30dd95b804fd9d8ab65a69d512800e02",
".git/objects/a3/997a5e830b8d73f44026d9e0985c9396f3946f": "e3e6ea39298afa770b66b5d0a63feb72",
".git/objects/b5/b09a55a196d182aa68cec58e880db9c0c20487": "a81c3a34c50213d2ffc1f7156718656f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/9b4f61870635b7878fe893c7c9b88de7320329": "3fd52ba8188652a9ab10b72593e62d51",
".git/objects/bb/79fe6f1e8bd935970e6ee025ac7f84233cc7da": "a8fb57fc763037f538488d44afebd2d0",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/33e5ef9c894780435ac4bab479c92c8e97a843": "bb1db13b6bcc7624c18b8ac5f20bfb98",
".git/objects/b4/fd8f74f4684fd233212ab045c3ffd7431603ff": "aca94a90bdce6c57ef7fb11acd93c646",
".git/objects/a5/e6899b2fdfe17a7109268c90a2e67ec41daa96": "dfc319fdf0a404ff14fee3506a2049eb",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ae7e4f1a33d8897ac7312738a8021a2e5f1163": "711477d7a0719e51d48692dc9a50ae7a",
".git/objects/d8/2d9723975c7119f2d3543fe63f75113595c7a5": "54401313b3192bf61b56e87e45f9e669",
".git/objects/e2/3187148f8945a66aa3df0d174e388b2df5ac68": "7daea5a1abf5b65ecffd3daf65bdb7a6",
".git/objects/f4/655d4e2269741b75321f2997d816082f8a4802": "13bfbef5d4d6c81513e400bbeccd38ac",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/3156690e8ecf31ab2cc5d5d79acdfc8727ecd8": "cd2ac31109049f61f621098db0354f0b",
".git/objects/c8/013331055fb2643871d2140fcddea895697e3c": "33b5bfd50e679b08ebfdd17ac03aab35",
".git/objects/fb/7757817f5464aa0c6aac24d96945542525042f": "20440bf91c2bcce7c2e6cba310dc7dbe",
".git/objects/ed/1877b43e752fe30868b438d77c795f49a1d5c1": "6e60ce5050d11fb472470e80a1a045ad",
".git/objects/27/429ce78b53579e32a85f4a014eec2ab7808ce7": "44843980768a4bc4b80669e3714671e4",
".git/objects/pack/pack-d5614c29524e09d291388d1b04238d9a731bb994.pack": "c27a6e84937f55e4aa63bedadab8bcb9",
".git/objects/pack/pack-d5614c29524e09d291388d1b04238d9a731bb994.idx": "ddefc1ca3a7163607c13a23cad92338b",
".git/objects/29/5a1e29761ce50caa694ef22f093040490ca406": "a6909366d61059a07e3741532cb580e5",
".git/objects/7c/939760b276bee6cad800d4ce9844aa74c0cf82": "a56e0ee96f13b4e063b0c7e44892bac5",
".git/objects/89/cc75189b49abb6689d093989f8c161d0c043d4": "420b516db72bb2e7b6a9a43ccf0ff19c",
".git/objects/1f/a3c3d350c0639719740f2a7675b64a161fc326": "c2fbd578b7f864387133a02a5494f9af",
".git/objects/1f/c68dc96efabe84ec1ba740db438c40f0f1f83a": "a5d5d27130caaaa621717421706de539",
".git/objects/73/767babe18ba3b0022b58992e3a152e9463eb15": "163eab871811e5569b1d0f964218b85d",
".git/objects/73/300c5e1a6a51e09c38f8839b1cb6e03c081898": "fbed0ab84a2c833758fcb363df540ae5",
".git/objects/74/30dc79e12c08bdb100867f0462f37e66219d3b": "c73e67834528d1dc25dde1b84ab4dfb5",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/69bce154b67dcf4bc7350e5252afceb561e5bb": "644df2122e66ddc149b051d3ce0c30da",
".git/objects/10/e0cc3ac32e31e137620f69042a2cb5fb1d7fdb": "4e7b59ba2503b28e9c07a65abf87d6e7",
".git/objects/19/15812c345762ea5db5a15851e8f1ecd2a62a24": "d0732bfba395f3b836187c56ff4ecba0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/440ffbe3e3d601eeabd8ddcb8de28e85c253b3": "44724c6826d695b4a9578016bf048e9b",
".git/objects/5c/df0855049d6b82b9466c1f3007bd4cb6a55736": "048cc6510b011f821a45673778fb45e4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/0c7a14fca9382b844e6b7e963df84600bcabe7": "ef25c4d7955fa982e28da51b4a7c8772",
".git/objects/98/6a63c1216d805071c37f7b07809c5e6be3e6ac": "b5a062724b7a1c26b67664d667c7857d",
".git/objects/3f/f4e5d6ffd1bee1aec0607b84f57b4b4e5c9dd3": "714415ad6781458e4fb164be67831884",
".git/objects/5e/846639edd880c88d693485d5e6963230f052fc": "138f769ebdb9f99b567314e38e67d65b",
".git/objects/37/3df98aa11dff78b51231e6d5e986aede683bd6": "3868e8832e8e8b31e75a8525563264bd",
".git/objects/01/f8f852d3e0432d6cf6fc0f31388c74293186c1": "adabac20754561a9019284b588330c88",
".git/objects/63/c652de4fc70b5fd3188dd5ac5a73c585ce6391": "4cc1acadf9f641b4ed089324ec4915e4",
".git/objects/64/8f078217014fc53a55ff66e5cf7e67d5d77a3b": "dbce6500fa84d1dbd13875bdd6c4c6d5",
".git/objects/90/75b3e4968f09ddd122730060863fb618694635": "9d839664ea0a7fe9729fefc9ddecb6b7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/30ac02d3968eddb21010a1345b426b677944a6": "074135020caec405a8055e7f30791e91",
".git/objects/ba/8cf0b0c2ca13a984207c532b02bc167f28ac1a": "97e162bea46b49c12fdf480cf84d42c0",
".git/objects/a0/f8a4ad43a5f308d4b3c86b387262be187de3ab": "93e91df3e40163f2d833ef10e247dbe9",
".git/objects/a7/78f29f2b126ffc6f3f2804fe96988721ebfab8": "a4399630475991ee7d4fcaba6c3edd31",
".git/objects/a7/07567712fb01281a7649f2e70738d9018e3c03": "4cf5b377930c256d85de88293e16e060",
".git/objects/b8/737cb62e5101dd57855bdd0df755476094da20": "3aa767e78a8371dc9b900493fe2a4bbe",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/1ed97b5b682de0c38ec10df46fcf585a889a89": "dcf635d7adcaac57455d42c11168692b",
".git/objects/aa/adee9529bbc0d65ad3546823de42792dea8217": "4f1cdd1cb80ed35b5491c3c6e323d5ce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2edfdb0d887f8e23834d4295f353ef830bad97": "148ee1678032dffb9142eb33639ad885",
".git/objects/db/1995587baf095cb3baec29a99d6c53581ed719": "129e07ed2952904f21e950a0ce8810f4",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/6631a68fef24b225827cbc5a26bc3c1108b089": "cd3c36220629e56a4e7131bc1a28659e",
".git/objects/a8/e4817bc42685971db6d2b172122c24558e4133": "1da2e0b3cd1ad19b01d3d6cd59097e21",
".git/objects/de/f9c755d0e736e9982be71eff5fee7e7e1dd198": "d2eb14cf3b3c771a645b25ef52386807",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/9a919c07a9a282eab81ed7ecc7e42eb9dedd42": "5604872ddd995b4bf44576f0f1acfb7a",
".git/objects/e1/7845a4600b91636f6a23c8a2d177a7d8e9ad5b": "be63fd35e358649f6b18b1cf70841026",
".git/objects/e1/5f8946b8d6b4a14b39b707acbd19d6fa43bc4a": "69f78a38626b538e21b0b9413cd61518",
".git/objects/f7/7b59b28c5c208a2cb32fa894073af43d40b364": "d16a7411f2e58fe45af0d64f2305a41f",
".git/objects/e8/ba3b8046324ad0420d13bfc6612657a4ef1fc8": "96861c596119195031a6fbd207b59a26",
".git/objects/c5/07dc9b9154c6098d4a755ece2196f82d1d7726": "9280fa6d8aa73395f8b48b2b092fbb76",
".git/objects/e9/146d13e47cb5011906360d39c0a6eb4a15595b": "be7e8bfa6ec1e723926cd3ae63fd745a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d8950f864902f1887d63dfc586d3b5635f95d7": "c3103165cfbe83fa7bec3782b83cf2f3",
".git/objects/cb/cc3ebd506af6851a19ee22f561174fae17fed6": "8aa59d7b8e9a0dc583c808333f475166",
".git/objects/46/a3c7f96a8a8bb44f92d9cd76cee5670d1030ba": "d4af6b64c670f8cd3c24ce478fe78281",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/3f1d4fb96aa1776e6a7941ce16c1c2926be32e": "2242139974ac4f865cd33e10ae536bbe",
".git/objects/1b/ba4e44c8acc93820ebc58078d68862db952348": "6b23e72771ba7a6450278c7afac85b92",
".git/objects/70/6f9e2339b3c9ec27291b0d41d8040fc743a9f1": "f205d4f893058535157d8a34b3c2d0a0",
".git/objects/23/2d4340ca6ee5ae51699bbb148a006e6c15cbf2": "788c1441931c0ffadfccec53c10ddb7f",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/f51cdbf3b10bbd53096ebe14130dac67dbbedc": "1f096320a408a8516d7302b6ab53d8e9",
".git/objects/12/0e2bfba10a260ba9ada03c2d12304e39a3fb39": "3505a65e5bd7ab300f807853b5c15cff",
".git/objects/1c/bf0b16b8ff4fdf6bb5459768ac05567a926ec2": "8f983258480accbeab78565029f664ea",
".git/objects/82/a68aeeff684c2e0c23a22fd5783d13b98bf43d": "b6f92407a3d6ab66abbf936b194209c4",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/0b8fafa9aced82d4a2a23bdd0597c1f4b439bb": "deed92ee428c82aa9aec34c07474f72d",
".git/objects/8b/98e81c086c0e3fab17b01fa14349fc1ce108ec": "34202386fca77815caafaa333cb9be6e",
".git/objects/14/d49f04bdcb87d5eb5083a377c7d46cee0b16e2": "248c04f120a650993118076d9645833e",
".git/objects/22/f3ffb599dda3a260c4c6a82ff4c55ffc7fee9d": "472f8c2e300eed7a787a30635e4f00dc",
".git/objects/22/2912a581bfe9d346d5daf3cda4f5a170ce369e": "2ee308bb32ae19cffa92287591e6daa9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0cff274aefb6d0c805dc42e5b7699c5d",
".git/logs/refs/heads/main": "0cff274aefb6d0c805dc42e5b7699c5d",
".git/logs/refs/remotes/origin/main": "80dcf37197f4de07a36ac0b37de54445",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ac7ab8f9a18079c82d3dc8f4f0d11c4b",
".git/refs/remotes/origin/main": "ac7ab8f9a18079c82d3dc8f4f0d11c4b",
".git/index": "8863d7cab105b5a4e58bd424f27512bf",
".git/COMMIT_EDITMSG": "88feb26fb45cf3cad0d07b5f7dddeaa0",
".git/FETCH_HEAD": "981b142f7e4b965dac42f90fffc378ae",
"assets/AssetManifest.json": "b65df530d89e3a2d95d8e006fba0d2ba",
"assets/NOTICES": "04c0d2bba9f3ac0c050a90245a6e3118",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "50a0793965ed3fa8ca93a0b2a3e04e89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a4ef1fb170dc8a8bcbdd66f9bdc6a4b4",
"assets/fonts/MaterialIcons-Regular.otf": "3ba99f3f19c8964e2cca67c797d42ef6",
"assets/assets/logo.png": "e088e0dc363fad6778f8891659dda564",
"assets/assets/icon/icon.png": "598d7f2b0f6b73d7615411ef1adfc430",
"assets/assets/icon/icon_1024.png": "8877cba6dd3981bdde726f6c80be6317",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
