import 'package:flutter/material.dart';

class Secound extends StatelessWidget {
  String message;
  Secound(this.message, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Secound Screen"),
      ),
      body: Center(
        child: Text(message),
      ),
    );
  }
}
