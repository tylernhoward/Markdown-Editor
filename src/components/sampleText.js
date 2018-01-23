var filePath = "/README.md";

function  readTextFile() {
    var txtFile = new File(filePath);
    txtFile.open("r");
    while (!txtFile.eof) {
        contents += txtFile.readln() + "\n";
    }
    return contents;
}
