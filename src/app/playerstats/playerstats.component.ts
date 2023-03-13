import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from '../services/players.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrls: ['./playerstats.component.scss'],
})
export class PlayerstatsComponent implements OnDestroy {
  playerForm: FormGroup;
  playerData: any;
  playerDataSubscription: Subscription | undefined;

  constructor(private fb: FormBuilder, private playersService: PlayersService) {
    this.playerForm = this.fb.group({
      playerName: ['', Validators.required],
      platform: ['', Validators.required],
    });
  }

  onSubmit() {
    const playerName = this.playerForm.value.playerName;
    const platform = this.playerForm.value.platform;
    this.playerDataSubscription = this.playersService
      .getPlayerData(playerName, platform)
      .subscribe((data) => {
        this.playerData = data;
      });
  }

  ngOnDestroy(): void {
    if (this.playerDataSubscription) {
      this.playerDataSubscription.unsubscribe();
    }
  }
}
