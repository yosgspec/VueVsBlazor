const fs=require("fs").promises;
const child_process=require("child_process");
const exec=require("util").promisify(child_process.exec);

(async function(){
	const codeDir="./src/assets/code";

	await Promise.all((await fs.readdir(codeDir)).map(f=>
		fs.unlink(`${codeDir}/${f}`)));
	await Promise.all((await fs.readdir("./src/app/pages")).map(f=>
		fs.copyFile(`./src/app/pages/${f}`,`${codeDir}/${f}`.replace(/\.component\.ts/g,".txt"))));
	await Promise.all((await fs.readdir("./src/app/components")).map(f=>
		fs.copyFile(`./src/app/components/${f}`,`${codeDir}/${f}`.replace(/\.component\.ts/g,".txt"))));
	await fs.copyFile("./src/app/store.service.ts",`${codeDir}/$store.txt`);
	console.log("Code Copied.");

	console.log((await exec("ng build --base-href=/VueVsBlazor/ng/")).stdout);

	const rmDir=async(path)=>{
		await Promise.all((await fs.readdir(path)).map(async f=>{
			let fullPath=`${path}/${f}`;
			return (await fs.stat(fullPath)).isDirectory()?
				await rmDir(fullpath):
				await fs.unlink(fullPath);
		}));
		await fs.rmdir(path);
	};

	try{await rmDir("../dist/ng");}catch{}
	try{await fs.rename("./dist/VueVsBlazor","../dist/ng");}catch{}
	try{await rmDir("./dist");}catch{}

	console.log("Angular Build Done.");
})();
