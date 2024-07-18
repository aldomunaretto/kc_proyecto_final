import csv
import random

# Lista de ejemplo de direcciones de wallets
wallets = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
    "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3",
    "1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs",
    "1HckjUpRGcrrRAtFaaCAUaGjsPx9oYmLaZ",
    "1AGNa15ZQXAZUgFiqJ3i7Z2DPU2J6hW62r",
    "1JryTePceSiWVzziDcMiB3RAA4E3x7BBMP",
    "1Ez69SnzzmePmZX3WpEzMKTrcBF2gpNQ55",
    "1MN3JsSk5viQmMBo8zNGTmAz85j4Qhx3eY",
    "1A3Ndhi3F8xq5ra3nYeJsyRH5Fx3J6iEcY"
]

# Seleccionar 10 wallets aleatorias (sin repetición)
random_wallets = random.sample(wallets, 10)

# Crear el archivo CSV
file_path = '/home/amunaretto/Documents/kc_qmf_token/airdrop-app/random_wallets.csv'
with open(file_path, mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Wallet Address"])
    for wallet in random_wallets:
        writer.writerow([wallet])

file_path
