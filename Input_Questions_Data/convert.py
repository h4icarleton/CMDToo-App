import csv
import json
import os


def jsonify():
    """Parses a csv to create a JSON"""
    file_dict = []
    question_sets = dict()
    print(os.getcwd())
    for file_name in [file for file in os.listdir() if file.endswith(".csv")]:
        with open(f"./{file_name}", "r") as csvfile:
            reader = csv.reader(csvfile)
            headers = next(reader)
            questions = []
            categories = set()
            for row in reader:
                question = dict()
                for col, value in enumerate(row):
                    question[headers[col]] = value
                    if headers[col] == "Category":
                        categories.add(value.casefold())
                questions.append(question)
            question_sets[file_name.replace(".csv", "")] = questions
            file_dict.append(
                {"file": file_name.replace(".csv", ""), "categories": list(categories)}
            )
    with open("../components/files.json", "w") as jsonfile:
        json.dump(
            file_dict,
            jsonfile,
            indent=2,
        )
    with open("../components/questions.json", "w") as jsonfile:
        json.dump(
            question_sets,
            jsonfile,
            indent=2,
        )


if __name__ == "__main__":
    jsonify()
