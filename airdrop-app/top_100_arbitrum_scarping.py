import requests
from bs4 import BeautifulSoup
import pandas as pd

# URL de la página que contiene las cuentas con más actividad en Arbitrum
url = "https://arbiscan.io/accounts/1?ps=100"

# Hacer una solicitud GET a la página
response = requests.get(url)

# Comprobar si la solicitud fue exitosa
if response.status_code == 200:
    # Parsear el contenido HTML de la página
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Encontrar la tabla que contiene las cuentas
    table = soup.find('table', {'class': 'table table-hover'})
    
    # Extraer las filas de la tabla
    rows = table.find_all('tr')
    
    # Lista para almacenar los datos extraídos
    data = []
    
    # Iterar sobre las filas, omitiendo la primera (cabecera)
    for row in rows[1:]:
        cols = row.find_all('td')
        cols = [col.text.strip() for col in cols]
        data.append(cols)
    
    # Convertir los datos a un DataFrame de pandas
    df = pd.DataFrame(data, columns=['Rank', 'Address', 'Name Tag', 'Balance', 'Percentage', 'Txn Count'])

    # Guardar el DataFrame en un archivo CSV
    df.to_csv('arbitrum_top_100.csv', index=False)
    print("Datos guardados en 'arbitrum_top_100.csv'")
else:
    print(f"Error al acceder a la página: {response.status_code}")
