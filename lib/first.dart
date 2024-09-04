import 'package:aplikasi_pertamaku/secound.dart';
import 'package:flutter/material.dart';

class First extends StatelessWidget {
  First({super.key});

  final TextEditingController _message = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("First"),
      ),
      body: Center(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: TextField(
                controller: _message,
                decoration: const InputDecoration(
                  hintText: "Isikan pesan anda",
                  border: OutlineInputBorder(),
                  label: Text("Pesan"),
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () {
                if (_message.text == '') {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Pesan Kosong!'),
                      duration: Duration(seconds: 1),
                    ),
                  );
                } else {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => Secound(_message.text),
                    ),
                  );
                }
              },
              child: const Text("Send Message"),
            ),
          ],
        ),
      ),
    );
  }
}
