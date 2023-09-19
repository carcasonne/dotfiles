Set-Location E:\Noter
$NOW=Get-Date
git pull
git add .
git commit -m $NOW
git push
Write-Host "Notes synced"
