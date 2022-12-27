echo "---Git Pull----"
git pull
echo "---Stopping Existing Docker----"
docker stop ramareactvite
echo "---Removing Existing Docker----"
docker rm ramareactvite
echo "\n\n---Building Image----"
docker build -t rama-react-vite:1.0 .
echo "---Deploying and Expose----"
docker run -itd -p 9008:3000 --name ramareactvite -e VITE_BACKEND_SERVER=http://localhost:8000 rama-react-vite:1.0