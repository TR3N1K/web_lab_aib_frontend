def print_histogram(text):
    # Создаем словарь для подсчета символов
    char_count = {}
    for char in text:
        if char != ' ' and char != '\n':
            char_count[char] = char_count.get(char, 0) + 1

    # Сортируем символы по возрастанию кодов
    sorted_chars = sorted(char_count.keys())

    # Определяем максимальное количество символов в столбце
    max_count = max(char_count.values())

    # Выводим гистограмму
    for char in sorted_chars:
        count = char_count[char]
        histogram_line = '#' * count

        # Добавляем пробелы для выравнивания столбцов
        histogram_line += ' ' * (max_count - count)

        # Выводим символ и гистограмму
        print(histogram_line + ' ' + char)

# Пример использования
encrypted_text = input("Введите зашифрованный текст: ")

print_histogram(encrypted_text)