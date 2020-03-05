dotnet publish -c Release -o out
rm -r ../dist/br
mv ./out/VueVsBlazor/dist ./dist
rm -r ./out
mv ./dist ../dist/br
read -p "done."
