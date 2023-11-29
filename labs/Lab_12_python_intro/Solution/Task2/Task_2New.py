def find_median_sum(n, X):
    medians = []  # Список для хранения медиан

    for i in range(1, n + 1):
        subsequence = X[:i]  # Первые i элементов последовательности X
        subsequence.sort()  # Сортировка подпоследовательности

        length = len(subsequence)
        if length % 2 == 1:  # Нечетная длина
            median = subsequence[length // 2]
        else:  # Четная длина
            median = (subsequence[length // 2 - 1] + subsequence[length // 2]) / 2

        medians.append(median)  # Добавление найденной медианы в список

    median_sum = sum(medians)  # Сумма всех найденных медиан
    return median_sum

# Пример использования
n = int(input("Введите n: "))
X = list(map(int, input("Введите последовательность чисел X: ").split()))

result = find_median_sum(n, X)
print(result)