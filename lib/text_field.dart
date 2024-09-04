import 'package:flutter/material.dart';

class Name extends StatefulWidget {
  const Name({super.key});

  @override
  State<Name> createState() => _NameState();
}

class _NameState extends State<Name> {
  final TextEditingController _controller = TextEditingController();
  bool lightOn = false;
  String? language;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Text Field"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(25),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              cursorColor: Colors.red,
              decoration: const InputDecoration(
                  hintText: "Isikan nama anda",
                  labelText: "Name",
                  border: OutlineInputBorder(),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.red),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(color: Colors.black),
                  ),
                  prefixIcon: Icon(Icons.add_a_photo),
                  labelStyle: TextStyle(color: Colors.black)),
            ),
            const SizedBox(
              height: 20,
            ),
            ElevatedButton(
              onPressed: () {
                if (_controller.text == '') {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Nama Kosong!'),
                      duration: Duration(seconds: 1),
                    ),
                  );
                } else {
                  showDialog(
                    context: context,
                    builder: (context) {
                      return AlertDialog(
                        content: Text('Nama anda: ${_controller.text}'),
                      );
                    },
                  );
                }
              },
              child: const Text("Submit"),
            ),
            Switch(
              value: lightOn,
              onChanged: (value) {
                setState(
                  () {
                    lightOn = value;
                  },
                );

                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(lightOn ? 'Light On' : 'Light Off'),
                    duration: const Duration(seconds: 1),
                  ),
                );
              },
            ),
            const SizedBox(
              height: 20,
            ),
            daftarBahasa("Dart"),
            daftarBahasa("Kotlin"),
            daftarBahasa("Swift"),
          ],
        ),
      ),
    );
  }

  ListTile daftarBahasa(String lang) {
    return ListTile(
      title: Text(lang),
      leading: Radio(
        value: lang,
        groupValue: language,
        onChanged: (String? value) {
          setState(
            () {
              language = value;

              showSnackBar();
            },
          );
        },
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void showSnackBar() {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("$language selected"),
      ),
    );
  }
}
