const fs=require("fs").promises;
const child_process=require("child_process");
const exec=require("util").promisify(child_process.exec);

(async function(){
	const codeDir="./public/code";

	await Promise.all((await fs.readdir(codeDir)).map(f=>
		fs.unlink(`${codeDir}/${f}`)));
	await Promise.all((await fs.readdir("./src/views")).map(f=>
		fs.copyFile(`./src/views/${f}`,`${codeDir}/${f}`.replace(/\.vue/g,".txt"))));
	await Promise.all((await fs.readdir("./src/components")).map(f=>
		fs.copyFile(`./src/components/${f}`,`${codeDir}/${f}`.replace(/\.vue/g,".txt"))));
	await fs.copyFile("./src/store/index.ts",`${codeDir}/$store.txt`);
	console.log("Code Copied.");

	console.log((await exec("yarn build")).stdout);

	const rmDir=async(path)=>{
		await Promise.all((await fs.readdir(path)).map(async f=>{
			let fullPath=`${path}/${f}`;
			return (await fs.stat(fullPath)).isDirectory()?
				await rmDir(fullpath):
				await fs.unlink(fullPath);
		}));
		await fs.rmdir(path);
	};

	try{await rmDir("../dist/ve");}catch{}
	try{await fs.rename("./dist","../dist/ve");}catch{}

	console.log("Vue.js Build Done.");
})();
