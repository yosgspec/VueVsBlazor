const string codeDir=@"./wwwroot/code";
Parallel.ForEach(Directory.GetFiles(codeDir),f=>
	File.Delete(f));
Parallel.ForEach(Directory.GetFiles(@"./Pages"),f=>
	File.Copy(f,$@"{codeDir}/{Path.GetFileName(f)}".Replace(".razor",".txt"),true));
Parallel.ForEach(Directory.GetFiles(@"./Shared"),f=>
	File.Copy(f,$@"{codeDir}/{Path.GetFileName(f)}".Replace(".razor",".txt"),true));
File.Copy(@"./Store/AppStore.cs",$@"{codeDir}/$store.txt",true);
WriteLine("Code Copied.");

var psi=new ProcessStartInfo("dotnet");
psi.Arguments="publish -c Release -o out";
psi.UseShellExecute=false;
psi.RedirectStandardOutput=true;
using(var p=Process.Start(psi)){
	var stdout=p.StandardOutput.ReadToEnd();
	p.WaitForExit();
	Console.WriteLine(stdout);
}
try{Directory.Delete(@"../dist/br",true);}catch{}
try{Directory.Move(@"./out/VueVsBlazor/dist",@"./dist");}catch{}
try{Directory.Delete(@"./out",true);}catch{}
try{Directory.Move(@"./dist",@"../dist/br");}catch{}
WriteLine("Blazor Build Done.");
