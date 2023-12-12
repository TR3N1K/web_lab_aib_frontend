import datetime
import openpyxl
from block0 import create_excel_file

# Определяем период выгрузки
start_date = datetime.datetime(2023, 1, 1)
end_date = datetime.datetime.now()

# Создаем файл Test2.xlsx с меткой времени создания и периодом выгрузки
create_excel_file('Test2.xlsx', datetime.datetime.now(), start_date, end_date)