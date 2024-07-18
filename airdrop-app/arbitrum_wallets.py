import pandas as pd
from bs4 import BeautifulSoup

# Fichero obtenido utilizando "curl -o pagina100.txt https://arbiscan.io/accounts/1?ps=100" 
# Leer el contenido del archivo HTML
with open('pagina100.txt', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parsear el contenido HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Encontrar la tabla que contiene las cuentas
table = soup.find('table', {'class': 'table'})

# Verificar si la tabla fue encontrada
if table is None:
    raise ValueError("No se encontró la tabla con la clase esperada en el archivo HTML")

# Extraer las filas de la tabla
rows = table.find_all('tr')

# Lista para almacenar las direcciones extraídas
addresses = []

# Iterar sobre las filas, omitiendo la primera (cabecera)
# for row in rows[1:]:
#     cols = row.find_all('td')
#     address = cols[1].text.strip()
#     addresses.append(address)
for row in rows[1:]:
    cols = row.find_all('td')
    if cols:
        address_span = cols[1].find('span', {'data-highlight-target': True})
        address = address_span['data-highlight-target'] if address_span else ''
    addresses.append(address)

# Convertir la lista de direcciones a un DataFrame de pandas
df = pd.DataFrame(addresses, columns=['Address'])

# Guardar el DataFrame en un archivo CSV
csv_path = 'arbitrum_wallets.csv'
df.to_csv(csv_path, index=False)
print(f"Direcciones de wallets guardadas en '{csv_path}'")
