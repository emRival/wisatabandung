import 'package:aplikasi_pertamaku/layout_builder.dart';
import 'package:aplikasi_pertamaku/responsif_layout.dart';
import 'package:aplikasi_pertamaku/responsive_page.dart';
import 'package:aplikasi_pertamaku/second_page.dart';
import 'package:flutter/material.dart';

class FirstPage extends StatefulWidget {
  const FirstPage({super.key});

  @override
  State<FirstPage> createState() => _FirstPageState();
}

class _FirstPageState extends State<FirstPage> {
  final TextEditingController _message = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("First Page"),
      ),
      body: Center(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: TextField(
                controller: _message,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  label: Text("Message"),
                  hintText: "Write your message here !",
                ),
              ),
            ),
            TextButton(
              onPressed: () {
                if (_message.text == "") {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text("Data masih kosong"),
                    ),
                  );

                  return;
                }

                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) {
                      return SecondPage(_message.text);
                    },
                  ),
                );
              },
              child: const Text("Go To Next Page"),
            ),
            const SizedBox(
              height: 30,
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const ResponsifLayout(),
                  ),
                );
              },
              child: const Text("Responsif Layout"),
            ),
            const SizedBox(
              height: 30,
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const MyLayoutBuilder(),
                  ),
                );
              },
              child: const Text("Layout Builder"),
            ),
            const SizedBox(
              height: 30,
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ResponsivePage(),
                  ),
                );
              },
              child: const Text("Responsive Page"),
            ),
          ],
        ),
      ),
    );
  }
}
