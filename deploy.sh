sudo systemctl stop finease-frontend.service
cd FinEase/frontend
git reset --hard HEAD~0
git pull
/home/ubuntu/.nvm/versions/node/v21.7.1/bin/npm -o ./bin/finease-backend ./cmd/main.go
sudo systemctl daemon-reload
sudo systemctl start finease-backend.service