import 'package:flutter/material.dart';

class ButtonScreen extends StatefulWidget {
  const ButtonScreen({super.key});

  @override
  State<ButtonScreen> createState() => _ButtonScreenState();
}

class _ButtonScreenState extends State<ButtonScreen> {
  String? language;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepOrange,
        centerTitle: true,
        title: const Text(
          "Button Screen",
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
        ),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () {},
              child: const Text("Elevated Button"),
            ),
            TextButton(
              onPressed: () {},
              child: const Text("Text Button"),
            ),
            OutlinedButton(
              onPressed: () {},
              child: const Text("Outline Button"),
            ),
            IconButton(
              onPressed: () {},
              tooltip: "Volume Up",
              icon: const Icon(Icons.volume_down),
            ),
            DropdownButton(
              items: const <DropdownMenuItem<String>>[
                DropdownMenuItem(
                  value: "dart",
                  child: Text("Dart"),
                ),
                DropdownMenuItem(
                  value: "flutter",
                  child: Text("Flutter"),
                ),
              ],
              value: language,
              hint: const Text("pilih bahasa"),
              onChanged: (String? value) {
                setState(() {
                  language = value;
                });
              },
            )
          ],
        ),
      ),
    );
  }
}
