now=`date +"%Y-%m-%d %T"`
cd ~/Desktop/Notes
git pull
git add .
git commit -m $now
git push
echo "Notes synced"