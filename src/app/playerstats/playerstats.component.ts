import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.scss'],
})
export class PlayerstatsComponent {
  playerForm: FormGroup;
  playerData: any;

  constructor(private fb: FormBuilder, private playersService: PlayersService) {
    this.playerForm = this.fb.group({
      playerName: ['', Validators.required],
      platform: ['', Validators.required],
    });
  }

  onSubmit() {
    const playerName = this.playerForm.value.playerName;
    const platform = this.playerForm.value.platform;
    this.playersService
      .getPlayerData(playerName, platform)
      .subscribe((data) => {
        this.playerData = data;
      });
  }
}
