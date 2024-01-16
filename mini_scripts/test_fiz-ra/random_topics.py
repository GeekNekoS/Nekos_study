import random
import datetime


today = datetime.datetime.today()


def create_statistics_file():
    """Создаёт новый файл / очищает статистику"""
    with open("statistics.txt", "w", encoding="utf-8") as base_file:
        for i in range(1, 20):
            base_file.write(f"{i}\n".rjust(3))


my_statistics = {i: "" for i in range(1, 20)}
safety_rules = {
    1: "Форма одежды студентов на занятии по физвоспитанию в тренажёрном зале: \n"
       "спортивный костюм, чистая сухая спортивная обувь, крепко фиксирующая стопу",
    2: "В случае недомогания перед началом занятия студент обязан сообщить об этом преподавателю",
    3: "Опоздавшие студенты на занятия не допускаются",
    4: "На занятия запрещается приходить:\n"
       " - в состоянии алкогольного и наркотического опьянения\n"
       " - с жевательной резинкой\n"
       " - с мобильным телефоном\n"
       " - с крупными ювелирными украшениями",
    5: "Длинные волосы должны быть прибраны в косу",
    6: "Категорически запрещается:\n"
       " - открывать окна без разрешения преподавателя\n"
       " - садиться и вставать на подоконники\n"
       " - покидать зал без разрешения преподавателя",
    7: "Необходимо внимательно слушать и выполнять все команды преподавателя,\n"
       "соблюдать дисциплину, выполнять все упражнения технически правильно",
    8: "Перед началом занятия необходимо выполнить качественную разминку",
    9: "Спортивный инвентарь использовать только по назначению",
    10: "Строго соблюдать рекомендуемую преподавателем нагрузку\n"
        "(набор упражнений, подходы, вес, интервал отдыха)",
    11: "При ухудшении самочувствия или травме необходимо немедленно сообщить об этом преподавателю",
    12: "При работе с гантелями, гирями, студенты должны находиться на безопасном расстоянии друг от друга",
    13: "Упражнения со свободными весами необходимо выполнять со страховкой",
    14: "При выполнении тяг и приседаний с отягощением использование пояса обязательно",
    15: "При выполнении упражнений со штангой вес необходимо закрепить\n"
        "замками с обеих сторон и проверить надёжность крепления",
    16: "Диски с грифа необходимо снимать с обеих сторон одновременно\n"
        "или зафиксировать гриф специальными крепежами",
    17: "В конце занятия необходимо приводить зал в порядок",
    18: "Уходить по окончанию занятия только всей группой с разрешения преподавателя",
    19: "После занятия необходимо вымыть руки с мылом и принять душ (по возможности)",
}


def tell_topic():
    print()

    topic = random.randrange(1, 20)
    print(topic)

    my_answer = input("Yes (y), no (n), quit (q)? ")
    while my_answer not in ["n", "y", "q"]:
        my_answer = input("Yes (y), no (n), quit (q)? ")

    if my_answer != "q":
        write_answer = ""
        if my_answer == "y":
            write_answer = "✔️"
            print(safety_rules[topic])
        if my_answer == "n":
            write_answer = "❌"
            print(safety_rules[topic])
        my_statistics[topic] += f" {write_answer}"

    if my_answer == "q":
        return my_statistics
    else:
        tell_topic()

    return my_statistics


def save_statistics():
    with open("statistics.txt", "r+", encoding="utf-8") as file:
        lines = file.readlines()
        file.seek(0)
        for i in tell_topic():
            old_line = lines[i-1].strip('\n')
            file.write(f"{old_line}{my_statistics[i]}\n".rjust(3))


if __name__ == "__main__":
    # create_statistics_file()
    save_statistics()