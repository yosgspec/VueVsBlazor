ng build --base-href=/VueVsBlazor/ng/
rm -r ../dist/ng/
mv ./dist/VueVsBlazor ../dist/ng
rm -r ./dist/
read -p "done."