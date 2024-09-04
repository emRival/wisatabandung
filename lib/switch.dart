import 'package:flutter/material.dart';

class SwitchWidget extends StatefulWidget {
  const SwitchWidget({super.key});

  @override
  State<SwitchWidget> createState() => _SwitchWidgetState();
}

class _SwitchWidgetState extends State<SwitchWidget> {
  bool mode = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Switch",
          style: TextStyle(color: mode ? Colors.white : Colors.black),
        ),
        centerTitle: true,
        backgroundColor: mode ? Colors.black : Colors.white,
      ),
      body: Container(
        decoration: BoxDecoration(color: mode ? Colors.black : Colors.white),
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.light_mode,
                color: mode ? Colors.white : Colors.yellow,
              ),
             const SizedBox(
                width: 20,
              ),
              Switch(
                  value: mode,
                  onChanged: (value) {
                    setState(() {
                      mode = value;
                    });
                  }),
             const SizedBox(
                width: 20,
              ),
              Icon(
                Icons.dark_mode,
                color: mode ? Colors.yellow : Colors.black,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
