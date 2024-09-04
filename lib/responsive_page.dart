import 'dart:math';

import 'package:flutter/material.dart';

class ResponsivePage extends StatelessWidget {
  ResponsivePage({super.key});

  final List<Color> _colors = [
    Colors.amber,
    Colors.black,
    Colors.cyan,
    Colors.deepOrange,
    Colors.green,
    Colors.indigo,
    Colors.blueAccent,
    Colors.limeAccent,
    Colors.tealAccent
  ];

  List<Widget> _generateContainer() {
    return List<Widget>.generate(20, (index) {
      return Container(
        margin: const EdgeInsets.all(8),
        color: _colors[Random().nextInt(_colors.length)],
        height: 100,
        
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Responsive Page"),
      ),
      body: LayoutBuilder(builder: (context, BoxConstraints constraints) {
        if (constraints.maxWidth < 393) {
          return ListView(
            children: _generateContainer(),
          );
        } else {
          return GridView.count(
            crossAxisCount: 4,
            children: _generateContainer(),
          );
        }
      }),
    );
  }
}
