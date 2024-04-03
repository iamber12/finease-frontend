sudo systemctl stop finease-frontend.service
cd FinEase/frontend
git reset --hard HEAD~0
git pull
npm run build
sudo systemctl daemon-reload
sudo systemctl start finease-backend.service